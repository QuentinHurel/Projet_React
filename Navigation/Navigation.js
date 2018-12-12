import React from 'react'
import Accueil from '../Component/Accueil'
import Game from '../Component/Game'
import { createBottomTabNavigator } from 'react-navigation'

const TabNavigator = createBottomTabNavigator({
    Accueil: {
        screen: Accueil
    },
    Game: {
        screen: Game
    }
})


export default TabNavigator