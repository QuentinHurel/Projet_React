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

    generateRandom = () => {
        let list = []
        let iterate = this.props.iterate
        console.log(this.props)
        let number
        for (let i = 0; i < iterate; i++) {
            number = Math.floor(Math.random() * (5 - 1) + 1);
            list.push(number)
            console.log(number)
        }
        console.log(list)
        return list
    }

    checkIfIsTheSame(){
        if (this.props.numberInput.lenght == this.state.random.length){
            console.log("même taile")
        }else{
            console.log("pas la même taille")
        }
    }


    incrementIterate(){
        const action = { type: 'INCREMENT_ITERATION', value: this.props.iterate }
        this.props.dispatch(action)
    }

    render() {
        return (
            <Case />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        iterate: state.iterate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      dispatch: (action) => { dispatch(action) }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Game)