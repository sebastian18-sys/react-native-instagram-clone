import React, { useState } from 'react'
import { View, Text, Image, TextInput, StyleSheet, Button } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'

// Install formik -> npm install formik
// Install yup -> npm install yup

const PLACEHOLDER_IMG = 'https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is requiered'),
    caption: Yup.string().max(2200, 'Caption has reached the caracter')
})

export default function FormikPostUploader({navigation}) {

    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

    return (
        <Formik 
        initialValues={{caption: '', imageUrl: ''}}
        onSubmit={values => {
            console.log(values)
            console.log('Your post its submit!!!!')
            navigation.goBack()
        }}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
                <>
                    <View style={styles.container}>
                        <Image source={{uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG}} style={{width: 100, height: 100}} />
                        <View style={{flex: 1, marginLeft: 12}}>
                            <TextInput
                                style={{color: "#fff", fontSize: 18}}
                                placeholder='Write a caption...'
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>  
                    </View>
                    <Divider width={0.2} orientation='vertical' />
                    <TextInput
                        onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                        style={{color: "#fff", fontSize: 18}}
                        placeholder='Enter image URL'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{fontSize: 10, color: "red"}}>
                            {errors.imageUrl}
                        </Text>
                    )}
                    <View style={{margin: 20}}>
                        <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                    </View>
                    
                </>
            )}

        </Formik>
    )
}

// 2:55:49

const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: "space-between",
        flexDirection: "row"
    }
})
