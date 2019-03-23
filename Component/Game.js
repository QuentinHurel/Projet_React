import React from 'react'
import Case from './Case'
import { connect } from 'react-redux'

class Game extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            random: this._generateRandom()
        }
    }

    _generateRandom() {
        let list = []
        let iterate = this.props.iterate
        let number
        for (let i = 0; i < iterate; i++) {
            number = Math.floor(Math.random() * (5 - 1) + 1);
            list.push(number)
        }
        console.log('list dans _generateRandom : ' + list)
        return list
    }

    _checkResult() {
        let result = this.props.numberInput
        let random = this.state.random
        let list = []
        for (let i = 0; i < random.length; i++) {
            if (random[i] == result[i]) {
                list.push(true)
            } else {
                list.push(false)
            }
        }
        this._rebootNumberInput()
        if (list.includes(false)) {
            console.log('Tu as perdu')
            this._rebootIteration()
            this._rebootLevel()
            console.log('level : ' + this.props.level)
            this._resultScreen()
            this.setState({ random: this._generateRandom() })
        } else {
            console.log('Tu as gagné')
            this._incrementIteration()
            this._incrementLevel()
            console.log('level : ' + this.props.level)
            this.setState({ random: this._generateRandom() })
        }
        
    }
 
    _resultScreen() {
        this.props.navigation.navigate("Result")
    }   

    _rebootNumberInput() {
        const action = { type: "REBOOT_NUMBERINPUT", value: this.props.numberInput }
        this.props.dispatch(action)
    }

    _rebootIteration() {
        const action = { type: "REBOOT_ITERATION", value: this.props.numberInput }
        this.props.dispatch(action)
    }

    _incrementIteration() {
        const action = { type: "INCREMENT_ITERATION", value: this.props.iterate }
        this.props.dispatch(action)
    }

    _rebootLevel() {
        const action = { type: "REBOOT_LEVEL", value: this.props.level }
        this.props.dispatch(action)
    }

    _incrementLevel() {
        const action = { type: "INCREMENT_LEVEL", value: this.props.level }
        this.props.dispatch(action)
    }

    play() {
        let game = setInterval(() => {
            if ( this.props.numberInput.length == this.state.random.length ) {
                this._checkResult()
                clearInterval(game)
            }
        }, 10);
    }

    render() {
        this.play()
        return ( <
            Case / >
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
      dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)