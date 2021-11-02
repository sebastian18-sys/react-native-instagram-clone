import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home',
        inactive: "https://img.icons8.com/fluency-systems-regular/48/ffffff/home"
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1',
        inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png'
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel',
        inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel'
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full'
    },
    {
        name: 'Profile',
        active: 'https://i.blogs.es/36938e/istock-840527124/450_1000.jpg',
        inactive: 'https://i.blogs.es/36938e/istock-840527124/450_1000.jpg'
    }
]

export default function BottomTabs({icons}) {

    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image 
            source={{uri: activeTab === icon.name ? icon.active : icon.inactive}} 
            style={[styles.icon, icon.name === 'Profile' ? styles.profilePic() : null,
            activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : null]} 
            />
        </TouchableOpacity>
    )

    // 2:17:07

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
            ))}
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 50,
        paddingTop: 10
    },

    icon: {
        width: 30,
        height: 30
    },

    wrapper: {
        // position: 'absolute',
        // width: '100%',
        // bottom: '3%',
        // zIndex: 999,
        // backgroundColor: '#000'
    },

    profilePic: (activeTab = '') =>({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor: '#fff'
    })
})
