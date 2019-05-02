import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import SingleTrack from './src/screens/SingleTrack'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  SingleTrack: {screen: SingleTrack}
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
})

const App = createAppContainer(MainNavigator)

export default App