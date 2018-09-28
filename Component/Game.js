import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

class Game extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.touchable, {backgroundColor: 'red'}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.touchable, {backgroundColor: 'green'}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.touchable, {backgroundColor: 'blue'}]}></TouchableOpacity>
                <TouchableOpacity style={[styles.touchable, {backgroundColor: 'yellow'}]}></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
      },
    touchable: {
        flex: 1,
        width: 300,
        height: 100
    }
})

export default Game