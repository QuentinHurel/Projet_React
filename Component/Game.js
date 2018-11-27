import React from 'react'
import Case from './Case'
import { connect } from 'react-redux'

class Game extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            random: this.generateRandom()
        }
        
    }

    generateRandom(){
        console.log(this.props)
        let list = []
        let number
        for (let i=0; i < 4; i++){
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

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Game)