import React from 'react'
import { View, Text } from 'react-native'
import AddNewPost from '../components/newPost/AddNewPost'

export default function NewPostScreen({navigation}) {
    return (
        <View style={{backgroundColor: "#000", flex: 1}}>
            <AddNewPost navigation={navigation} />
        </View>
    )
}
