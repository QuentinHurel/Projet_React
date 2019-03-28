import React from 'react'
import Accueil from '../Component/Accueil'
import Game from '../Component/Game'
import Result from '../Component/Result'
import { createStackNavigator } from 'react-navigation'

const TabNavigator = createStackNavigator({
    Accueil: {
        screen: Accueil
    },
    Game: {
        screen: Game
    },
    Result: {
        screen: Result
    }
})



export default TabNavigator