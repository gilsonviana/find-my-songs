import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import SearchBox from '../components/SearchBox'
import TrackList from '../components/TrackList'

class HomeScreen extends Component {
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
        return(
            <View style={styles.container}>
                <SearchBox handleSearchBoxSubmit={this.handleSearchBoxSubmit} />
                <TrackList list={this.state.data} {...this.props}/>
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

export default HomeScreen