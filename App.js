import React from 'react'
import { View, StyleSheet } from 'react-native'

import SearchBox from './src/components/SearchBox'
import TrackList from './src/components/TrackList';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }

    this.handleSearchBoxSubmit = this.handleSearchBoxSubmit.bind(this)
  }

  handleSearchBoxSubmit(response) {
    return this.setState({ data: response.tracks.items })    
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBox handleSearchBoxSubmit={this.handleSearchBoxSubmit} />
        <TrackList list={this.state.data} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,        
    marginTop: 32 
  },
})