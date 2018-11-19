import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

class Case extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            red: 1,
            blue: 2,
            green: 3,
            yellow: 4,
            numberInput: []
        }
    }

    getValue = (x) => {
        let list = this.state.numberInput
        list.push(x)
        console.log(list)
    }

    render() {
        return (
    
            <View style={styles.cubebox}>
                <View>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'red', marginTop: 50, marginRight: 25 }]} onPress={() => this.getValue(this.state.red)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'green', marginRight: 25 }]} onPress={() => this.getValue(this.state.green)}></TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'blue', marginTop: 50 }]} onPress={() => this.getValue(this.state.blue)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'yellow' }]} onPress={() => this.getValue(this.state.yellow)}></TouchableOpacity>
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


export default Case;