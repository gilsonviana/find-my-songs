import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default class SearchBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            query: '',
            type: 'track'
        }
    }

    async handleOnSubmit() {        
        const result = await fetch(`http://192.168.0.16:3000/search/${this.state.type}/${encodeURI(this.state.query)}`)
                                .then(response => response.json())
                                .then(data => data)
                                .catch(error => alert(error))
        
        return this.props.handleSearchBoxSubmit(result)
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.textInput}
                    selectionColor="#03A9F4"
                    placeholder="Try finding your favorite song..."    
                    onChangeText={text => this.setState({query: text})}
                    onSubmitEditing={() => this.handleOnSubmit()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 12,
        marginRight: 12,        
        padding: 12,
        shadowColor: "#212121",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,        
        elevation: 1,
        borderRadius: 8
    },
    textInput: {
        paddingLeft: 6
    }
})