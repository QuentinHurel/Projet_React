import React from 'react';
import { connect } from 'react-redux'
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux'

class Case extends React.Component{

    constructor(props){
        super(props);
        this.red = 1
        this.blue = 2
        this.green = 3
        this.yellow = 4
    }

    getValue = (x) => {
        let list = this.props.numberInput
        list.push(x)
        console.log(list)
    }

    getNumberInput(){
        return this.props.numberInput
    }

    render() {
        return (
    
            <View style={styles.cubebox}>
                <View>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'red', marginTop: 50, marginRight: 25 }]} onPress={() => this.getValue(this.red)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'green', marginRight: 25 }]} onPress={() => this.getValue(this.green)}></TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'blue', marginTop: 50 }]} onPress={() => this.getValue(this.blue)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.touchable, { backgroundColor: 'yellow' }]} onPress={() => this.getValue(this.yellow)}></TouchableOpacity>
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

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Case);