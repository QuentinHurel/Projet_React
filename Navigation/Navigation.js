import React from 'react'
import Accueil from '../Component/Accueil'
import Game from '../Component/Game'
import Result from '../Component/Result'
import { createStackNavigator } from 'react-navigation'

const TabNavigator = createStackNavigator({
    Accueil: {
        screen: Accueil,
        navigationOptions: () => ({
            headerMode : 'none'
        }),
      },
      Game: {
        screen: Game,
        navigationOptions: () => ({
            headerBackTitleVisible  : false
        }),
      },
      Result: {
        screen: Result,
        navigationOptions: () => ({
            headerBackTitleVisible : 'false'
        }),
    }
},
{
    navigationOptions: {
        header: null,
    }
})



export default TabNavigator