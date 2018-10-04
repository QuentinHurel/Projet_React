import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

class Game extends React.Component {
    render() {
        return (
      
                <View style={styles.cubebox}>
                    <View>
                        <TouchableOpacity style={[styles.touchable, { backgroundColor: 'red', marginTop: 50, marginRight: 25 }]} ></TouchableOpacity>
                        <TouchableOpacity style={[styles.touchable, { backgroundColor: 'green', marginRight: 25 }]}></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.touchable, { backgroundColor: 'blue', marginTop: 50 }]}></TouchableOpacity>
                        <TouchableOpacity style={[styles.touchable, { backgroundColor: 'yellow' }]}></TouchableOpacity>
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    cubebox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height:10,
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#fff'
    },
    touchable: {
        flex: 1,
        width: 150,
        marginBottom: 40,
        borderRadius: 10,
        borderWidth: 10,
        borderColor: 'black'
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Game