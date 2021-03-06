import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import TrackListItem from './TrackListItem';

const TrackList = (props) => { 
    const {list} = props
    return(
        <ScrollView style={styles.container}>
        {
            (Object.keys(list).length !== 0) && list.map(item => <TrackListItem key={item.id} track={item} {...props} />) 
        }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 12
    }
})

export default TrackList