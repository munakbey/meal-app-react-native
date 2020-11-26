import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../component/MealItem';
import { Categories, Meals } from '../data/mock-category'


const CategoryMealScreen = props => {

    const renderMealItem = itemData => {
        return (
         <MealItem 
         title = {itemData.item.title}
         image = {itemData.item.imageUrl}
         duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
         onMealSelected = {() => {

         }}
         ></MealItem>
        )
    }

    const catId = props.navigation.getParam('categoryId');
    const getSelectedCat = Categories.find(cat => cat.id === catId)

    const displayMeals = Meals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>
            <FlatList
                renderItem={renderMealItem}
                data={displayMeals}
                keyExtractor={(item, index) => item.id} />
        </View>
    )

}
CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = Categories.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CategoryMealScreen