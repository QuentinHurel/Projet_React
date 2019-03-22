import React from 'react'
import Case from './Case'
import {
    connect
} from 'react-redux'

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
            console.log(number)
        }
        return list
    }

    _resultScreen() {
        this.props.navigation.navigate("Result")
    }

    _checkResult() {
        let level = this.props.level
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
        this._incrementNumberInput()
        if (list.includes(false)) {
            console.log('Tu as perdu')
            level = 1
            this.props.iterate = 3
            this.setState({random : this._generateRandom()})
            this._resultScreen()
        } else {
            console.log('Tu as gagné')
            level += 1  
            this.setState({random : this._generateRandom()})
            //this._incrementIteration()
        }
        
        console.log(this.state.random)
    }
    

    _incrementNumberInput() {
        const action = { type: "REBOOT_NUMBERINPUT", value: this.props.numberInput }
        this.props.dispatch(action)
    }

    // _incrementIteration() {
    //     const action = { type: "INCREMENT_ITERATION", value: this.props.iterate }
    //     this.props.dispatch(action)
    // }

    play() {
        let result = this.props.numberInput
        let random = this.state.random
        let game = setInterval(() => {
            if (result.length == random.length) {
                this._checkResult()
                clearInterval(game)
            }
        }, 1000);
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