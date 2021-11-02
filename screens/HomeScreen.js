import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';
import Header from '../components/home/Header'
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { POSTS } from '../data/posts';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView showsVerticalScrollIndicator={false}>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
            <BottomTabs icons={bottomTabIcons} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    },
});
