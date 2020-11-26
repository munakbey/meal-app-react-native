import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CategoryGridTile = props => {
    return (
        <View style = {styles.gridItem}>
            <TouchableOpacity onPress={props.onSelect} style={{ flex: 1 }}>
                <View  style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text numberOfLines={2}>
                        {props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 60,
        height: 150,
        position: 'relative'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 20,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      },
})

export default CategoryGridTile;