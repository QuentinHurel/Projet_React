import React from 'react'
import Case from './Case'

class Game extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            iterate: 3,
            random: this.generateRandom.bind(this)
        }
        
    }

    generateRandom(){
        let round = this.state.iterate
        let list = []
        let number
        for (let i=0; i < round; i++){
            number = Math.floor(Math.random() * (5 - 1) + 1);
            list.push(number)
            console.log(number)
        }
        console.log(list)
        return list
    }
    
    render() {
        return (
            <Case/>
        )
    }
}

export default Game