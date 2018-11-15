import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

class Game extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            red: 1,
            blue: 2,
            green: 3,
            yellow: 4
        }
        numberStock = [];
        iteration = 3;
    }

    generateRandomNumber = () =>{
        for(let i = 0; i < iteration; i++){
            let random = Math.floor(Math.random() * (5 - 1) + 1);
            numberStock.add(random);
        }
        return numberStock;
    }

    getValue = (x) => {
        console.log(this.state.x);
    }

    
    render() {
        return (
      
                <View style={styles.cubebox}>
                    <View>
                        <TouchableOpacity style={[styles.touchable, { backgroundColor: 'red', marginTop: 50, marginRight: 25 }]}  onPress={(red) => this.getValue(red)}></TouchableOpacity>
                        <TouchableOpacity style={[styles.touchable, { backgroundColor: 'green', marginRight: 25 }]} value={this.state.green} onPress={(green) => this.getValue(green)}></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={[styles.touchable, { backgroundColor: 'blue', marginTop: 50 }]} value={this.state.blue} onPress={(blue) => this.getValue(blue)}></TouchableOpacity>
                        <TouchableOpacity style={[styles.touchable, { backgroundColor: 'yellow' }]} value={this.state.yellow} onPress={(yellow) => this.getValue(yellow)}></TouchableOpacity>
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