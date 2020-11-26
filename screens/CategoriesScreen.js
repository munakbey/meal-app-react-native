import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import CategoryGridTile from '../component/CategoryGridTile'
import Color from '../const/color'
import { Categories } from '../data/mock-category'




const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color = {itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeal',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}></CategoryGridTile>
        )
    }


    return (
        <FlatList
            numColumns={2}
            renderItem={renderGridItem}
            data={Categories}
            keyExtractor={(item, index) => item.id} />
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

})

export default CategoriesScreen;