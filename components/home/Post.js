import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'

const postFooterIcons = [
    {
        name: 'Like',
        imageURL: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like',
        likedImageURL: 'https://img.icons8.com/ios-glyphs/90/fa314a/like'
    },
    {
        name: 'Comment',
        imageURL: 'https://img.icons8.com/material-outlined/60/ffffff/speech-bubble',
    },
    {
        name: 'Share',
        imageURL: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/paper-plane',
    },
    {
        name: 'Save',
        imageURL: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon',
    },

    // 1:14:24
]

export default function Post({post}) {
    return (
        <View style={{marginBottom: 30}}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{marginHorizontal: 15, marginTop: 10}}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View> 
        </View>
    )
}

const PostHeader = ({post}) => (
    <View style={styles.headerContanier}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
            <Image style={styles.headerImage} source={{uri: post.profile_picture}} />
            <Text style={styles.headerText}>{post.user}</Text>
        </View>
        <Text style={{color:"#fff", fontWeight:"bold"}}>...</Text>
    </View>
)

const PostImage = ({post}) => (
    <View style={{width: '100%', height: 450}}>
        <Image style={styles.ImageContanier} source={{uri: post.imageUrl}} />
    </View>
)

const PostFooter = () => (
    <View style={{flexDirection: "row"}}>
        <View style={styles.leftFooterIconsContanier}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageURL} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageURL} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageURL} />
        </View>
        <View style={{flex: 1, alignItems:"flex-end"}}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageURL} />
        </View>
    </View>
)

const Icon = ({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri: imgUrl}} />
    </TouchableOpacity>
)

const Likes = ({post}) => (
    <View style={{flexDirection: "row", marginTop: 4}}>
        <Text style={{color: "#fff", fontWeight: "600"}}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)

const Caption = ({post}) => (
    <View style={{marginTop: 5}}>
        <Text style={{color:"#fff"}}>
            <Text style={{fontWeight: "bold"}}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
)

// post.comments.lengt -> Give 1 or 0. Not true or false.
// With 1 render text blablabla..
// With 0 crashed.
// Then with !!post.comments.lengt is not crashed if its 0

const CommentsSection = ({post}) => (
    <View style={{marginTop: 5}}>
        {!!post.comments.length && (
        <Text style={{color: "gray"}}>
            View {post.comments.length > 1 ? 'all' : ''} {post.comments.length} {post.comments.length > 1 ? "comments" : "comment"}
        </Text>
        )}
    </View>
)

const Comments = ({post}) => (
    <>
    {post.comments.map((comment, index) => (
        <View key={index} style={{flexDirection: "row", marginTop: 5}}>
            <Text style={{color: "#fff"}}>
                <Text style={{fontWeight: "bold"}}>{comment.user}</Text>{' '}
                {comment.comment}
            </Text>
        </View>
    ))}
    </>
)

const styles = StyleSheet.create({
    headerContanier: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignItems: "center"
    },

    headerImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: "#ff8501"
    },

    headerText: {
        color: "#fff",
        marginLeft: 5,
        fontWeight: "bold"
    },

    ImageContanier: {
        height: '100%',
        resizeMode: "cover"
    },

    footerIcon: {
        width: 33,
        height: 33
    },

    leftFooterIconsContanier: {
        flexDirection: "row",
        width: "32%",
        justifyContent: "space-between"
    }
})
