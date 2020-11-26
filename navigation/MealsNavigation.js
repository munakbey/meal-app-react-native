import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import MealDetailScreen from '../screens/MealDetailScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import Color from '../const/color'

const MealsNavigation = createStackNavigator({

    Categories: CategoriesScreen,
    MealDetail: MealDetailScreen,
    CategoryMeal: {
        screen: CategoryMealScreen
    },
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Color.primaryColor : ''
            },
            headerTintColor:
                Platform.OS === 'android' ? 'white' : Color.primaryColor,
            headerTitle: 'A Screen'
        }
    })

export default createAppContainer(MealsNavigation);