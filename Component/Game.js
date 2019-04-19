import React from 'react'
import Case from './Case'
import { connect } from 'react-redux'

class Game extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            random: 0
        }
    }

    componentWillMount(){
        this.setState({ random: this._generateRandom() }) 
    }

    _generateRandom = () => {
        let list = []
        let iterate = this.props.iterate
        let number
        for (let i = 0; i < iterate; i++) {
            number = Math.floor(Math.random() * (5 - 1) + 1);
            list.push(number)
        }
        let nbList = this.props.randomNumber
        console.log(this.props.randomNumber.length)
        for (let i = 0; i < list.length; i++) {
            nbList.push(list[i])
        }
        return list
    }

    _play = () => {
        let game = setInterval(() => {
            if ( this.props.numberInput.length == this.state.random.length ) {
                this._checkResult()
                clearInterval(game)
            }
        }, 10);
    }

    _checkResult = () => {
        
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
        this._enableFalse()
        this._rebootRandom()
        this._rebootNumberInput()
        if (list.includes(false)) {
            this._rebootIteration()
            this._resultScreen()
            this.setState({ random: this._generateRandom() })
        } else {
            this._incrementLevel()
            this.setState({ random: this._generateRandom() })
        }
    }
 
    _resultScreen = () => {
        this.props.navigation.push("Result")
    }
    
    _enableFalse = () => {
        const action = { type: "ENABLE_FALSE", value: this.props.enable }
        this.props.dispatch(action)
    }

    _rebootNumberInput = () => {
        const action = { type: "REBOOT_NUMBERINPUT", value: this.props.numberInput }
        this.props.dispatch(action)
    }

    _rebootIteration = () => {
        const action = { type: "REBOOT_ITERATION", value: this.props.numberInput }
        this.props.dispatch(action)
    }

    _rebootRandom = () => {
        const action = { type: "REBOOT_RANDOMNUMBER", value: this.props.randomNumber }
        this.props.dispatch(action)
    }

    _incrementLevel = () => {
        const action = { type: "INCREMENT_LEVEL", value: this.props.level }
        this.props.dispatch(action)
    }

    render() {
        this._play()
        return (     
        <Case />
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