import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen}  
})

const App = createAppContainer(MainNavigator)

export default App
// export default class App extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       data: {}
//     }

//     this.handleSearchBoxSubmit = this.handleSearchBoxSubmit.bind(this)
//   }

//   handleSearchBoxSubmit(response) {
//     return this.setState({ data: response.tracks.items })    
//   }

//   render() {
//     return (
//       <View style={styles.container}>
        
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,        
//     marginTop: 32 
//   },
// })