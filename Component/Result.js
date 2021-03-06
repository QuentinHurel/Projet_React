import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Result extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            levelLoose : this._getLevel()
        }
    }

    _gameScreen() {
        this.props.navigation.navigate("Game")
    }

    _accueilScreen() {
        this.props.navigation.navigate("Accueil")
    }

    _getLevel() {
        let level = this.props.level
        console.log('getLevel')
        return level
    }

    componentDidMount() {
        this._rebootLevel()
        console.log('componentDidMount')
    }
    
    _rebootLevel = () => {
        const action = { type: "REBOOT_LEVEL", value: this.props.level }
        this.props.dispatch(action)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Tu as perdu niveau {this.state.levelLoose}</Text>
                <TouchableOpacity style={styles.toucheable} onPress={() => this._gameScreen()}>
                    <Text style={styles.text}>Rejouer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toucheable} onPress={() => this._accueilScreen()}>
                    <Text style={styles.text}>Menu</Text>
                </TouchableOpacity>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toucheable: {
        marginTop: 50,
        borderColor: 'black',
        width: 200,
        backgroundColor: '#323840',
        shadowOpacity: 1,
        borderRadius: 10,
        elevation: 10
    },
    text: {
        fontStyle: ('normal', 'italic'),
        textAlign: 'center',
        color: '#EEEEEE',
        padding: 25
    },
    message: {
        fontWeight: 'bold',
        fontSize: 20
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

export default connect(mapStateToProps, mapDispatchToProps)(Result)