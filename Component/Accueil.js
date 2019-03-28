import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
class Accueil extends React.Component {

    _gameScreen() {
        this.props.navigation.navigate("Game")
    }

    render() {
        return (
            <View sytyle={styles.container}>
                <TouchableOpacity style={styles.toucheable} onPress={() => this._gameScreen()}>
                    <Text style={styles.text}>Jouer</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toucheable: {
        marginTop: 400,
        borderColor: 'black',
        width: 200,
        marginLeft: 105,
        backgroundColor: '#323840',
        shadowOpacity: 1,
        borderRadius: 10,
        elevation: 10
    },
    text: {
        fontStyle: ('normal', 'italic'),
        textAlign: 'center',
        color: '#EEEEEE',
        padding: 25
    }
})

export default Accueil