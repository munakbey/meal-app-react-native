import React from 'react'
import { View, StyleSheet, Text , Button } from 'react-native'

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>MealDetailScreen</Text>
            <Button title = 'Go Back' onPress={() => {
                props.navigation.popToTop()
            }}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MealDetailScreen;