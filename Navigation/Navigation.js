import React from 'react';
import { createBottomTabNavigator } from 'react-navigation'

const TabNavigator = createBottomTabNavigator({
    Accueil: {
        screen: Accueil,
        navigationOptions: {
            title:'Accueil'
        },
        Game: {
            screen: Game
        }
    }
})


export default TabNavigator