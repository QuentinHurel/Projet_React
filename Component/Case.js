import React from 'react';
import { connect } from 'react-redux'
import {View, StyleSheet} from 'react-native';
import TouchableScale from 'react-native-touchable-scale'

class Case extends React.Component{

    constructor(props){
        super(props);
        this.red = 1
        this.blue = 2
        this.green = 3
        this.yellow = 4 
        this.state = {
            red: 'red',
            green: 'green',
            blue: 'blue',
            yellow: 'yellow'
        }
    }

    _getValue = (x) => {
        if ( this.props.enable == true ) {
            let list = this.props.numberInput
            list.push(x)
            console.log(list)
        }
    }

    _changeColor = () => {
        let i = 0
        let cases = setInterval(() => {
            this._colorCase(i)
            i++
            if( i == this.props.iterate ) { 
                this._enableTrue()
                clearInterval(cases)
            }
            
        }, 1500);
    }

    _colorCase = (index) => {
        let nb = this.props.randomNumber
        if (nb[index] == 1) {
            this.setState({red: 'black'})
            setTimeout(() => { this.setState({ red: 'red' }) }, 1000);
        } else if (nb[index] == 2) {
            this.setState({blue: 'black'})
            setTimeout(() => { this.setState({ blue: 'blue' }) }, 1000);
        } else if (nb[index] == 3) {
            this.setState({green: 'black'})
            setTimeout(() => { this.setState({ green: 'green' }) }, 1000);
        } else if (nb[index] == 4) {
            this.setState({yellow: 'black'})
            setTimeout(() => { this.setState({ yellow: 'yellow' }) }, 1000);
        }    
    }

    _toto = () => {
        let game = setInterval(() => {
            if (  this.props.randomNumber.length == this.props.iterate ) {
                console.log('nombre: ' + this.props.randomNumber.length)
                console.log('iterate: ' + this.props.iterate)
                this._incrementIteration()
                this._changeColor()
                clearInterval(game)
            }
        }, 10);
    }

    _incrementIteration = () => {
        const action = { type: "INCREMENT_ITERATION", value: this.props.iterate }
        this.props.dispatch(action)
    }

    _enableTrue = () => {
        console.log('enabe become true')
        const action = { type: "ENABLE_TRUE", value: this.props.enable }
        this.props.dispatch(action)
    }

    render() {
        this._toto()
        return (
            <View style={styles.cubebox}>
                <View>
                    <TouchableScale style={[styles.touchable, { backgroundColor: this.state.red, marginTop: 50, marginRight: 25 }]} onPress={() => this._getValue(this.red)}activeScale={0.8}></TouchableScale>
                    <TouchableScale style={[styles.touchable, { backgroundColor: this.state.green, marginRight: 25 }]} onPress={() => this._getValue(this.green)}activeScale={0.8}></TouchableScale>
                </View>
                <View>
                    <TouchableScale style={[styles.touchable, { backgroundColor: this.state.blue, marginTop: 50 }]} onPress={() => this._getValue(this.blue)}activeScale={0.8}></TouchableScale>
                    <TouchableScale style={[styles.touchable, { backgroundColor: this.state.yellow }]} onPress={() => this._getValue(this.yellow)}activeScale={0.8}></TouchableScale>
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

const mapDispatchToProps = (dispatch) => {
    return {
      dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Case)