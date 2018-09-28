import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Accueil extends React.Component {

    _gameScreen () {
        this.props.navigation.navigate("Game")
    }

    render() {

        return (
            <View>
                <TouchableOpacity style={{width: 100, height:100}} onPress={() => this._gameScreen()}>
                    <Text>Game</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Accueil