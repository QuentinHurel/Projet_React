import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

class Case extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            red: 1,
            blue: 2,
            green: 3,
            yellow: 4
        }
    }

    getValue(x){
        
        return x;
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'red' }]} onPress={() => getValue(this.state.red)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'green' }]} onPress={() => getValue(this.state.green)}></TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'blue' }]} onPress={() => getValue(this.state.green)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'yellow' }]} onPress={() => getValue(this.state.yellow)}></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff'
    },
    touchable:  {
        flex: 1,
        width: 200,
        height: 100
    }
})


export default Case;