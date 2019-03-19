import React from 'react'
import Case from './Case'
import { connect } from 'react-redux'

class Game extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            random: this.generateRandom()
        }
    }

    generateRandom(){
        let list = []
        let iterate = this.props.iterate
        console.log(this.props)
        let number
        for (let i=0; i < iterate; i++){
            number = Math.floor(Math.random() * (5 - 1) + 1);
            list.push(number)
            console.log(number)
        }
        return list
    }

    _resultScreen() {
        this.props.navigation.navigate("Result")
    }
    
    play(){
        let result = this.props.numberInput
        let random = this.state.random
        let game = setInterval(() => {
            checkResult()
        }, 100);
        function checkResult(){
            let list = []
            if(result.length == random.length) {
                clearInterval(game)
                for ( let i = 0; i < random.length; i++) {
                    if ( random[i] == result[i] ) {
                        list.push(true)
                    } else {
                        list.push(false)
                    }
                }
                if (list.includes(false)){
                    console.log('Tu as perdu')
                    //_resultScreen()
                } else {
                    console.log('Tu as gagné')
                    //_resultScreen()
                }
            }
        }
    }

    render() {   
        this.play()
        return (
            <Case />
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Game)