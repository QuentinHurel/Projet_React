import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'
import FadeInView from './FadeInView';

class Accueil extends React.Component {
    _gameScreen() {
        this.props.navigation.push("Game")
    }

    render() {

        return (
            <View sytyle={styles.container}>
            <FadeInView>
            <ImageBackground source={require('../assets/Background_Image.png')} style={styles.backgroundImage}/>
            <Text style={styles.titre}>Simon</Text>
                <TouchableOpacity style={styles.toucheable} onPress={() => this._gameScreen()}>
                    <Text style={styles.text}>Jouer</Text>
                </TouchableOpacity>
                </FadeInView>
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
        marginBottom: 100,
        backgroundColor: '#827676',
        shadowOpacity: 1,
        borderRadius: 10,
        elevation: 10,
    },
    text: {
        fontStyle: ('normal', 'italic'),
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        color: 'black',
        padding: 25,
    },
    titre: {
        fontStyle: ('normal', 'italic'),
        textAlign: 'center',
        color: '#ffffff',
        marginTop: 300,
        fontSize: 50
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute', 
     }
})

export default Accueil