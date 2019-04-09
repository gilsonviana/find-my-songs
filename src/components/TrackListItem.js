import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const TrackListItem = ({ track }) => (
    <View style={styles.container}>
        <Image style={{borderRadius: 8, height: 64, width: 64}} resizeMode="contain" resizeMethod="scale" source={{uri: track.album.images[2].url}} />
        <View style={styles.content}>
            <Text style={styles.trackName}>{track.name}</Text>
            <Text style={styles.artistName}>{track.artists[0].name}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 24,                
    },
    content: {
        flex: 2,
        marginLeft: 12
    },
    trackName: {
        fontWeight: '500'
    },
    artistName: {
        fontWeight: '300'
    }
})

export default TrackListItem