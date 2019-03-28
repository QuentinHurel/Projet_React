import React from 'react';
import { connect } from 'react-redux'
import {View, StyleSheet} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';


class Case extends React.Component{

    constructor(props){
        super(props);
        this.sound_one = new Sound ('../assets/sound_first.mp3')
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
                    <TouchableScale style={[styles.touchable, { backgroundColor: 'red', marginTop: 50, marginRight: 25 }]} onPress={() => this.getValue(this.red)}></TouchableScale>
                    <TouchableScale style={[styles.touchable, { backgroundColor: 'green', marginRight: 25 }]} onPress={() => this.getValue(this.green)}></TouchableScale>
                </View>
                <View>
                    <TouchableScale style={[styles.touchable, { backgroundColor: 'blue', marginTop: 50 }]} onPress={() => this.getValue(this.blue)}></TouchableScale>
                    <TouchableScale style={[styles.touchable, { backgroundColor: 'yellow' }]} onPress={() => this.getValue(this.yellow)}></TouchableScale>
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