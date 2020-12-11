import React from 'react';
import NativeText from '../Text';
import {View,TouchableWithoutFeedback,StyleSheet} from 'react-native';
import {Formik} from 'formik';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';

const styles=StyleSheet.create({
    container:{
        backgroundColor: theme.colors.RepoListBgColor,
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        height: 350
    },
    button:{
        backgroundColor: theme.colors.primary,
        width: '90%',
        height: 40,
        borderRadius: 10
    },
    textButton:{
        textAlign: 'center',
        color: theme.colors.tabLabel,
        lineHeight: 40
    }
});

const ReviewForm=({onSubmit,validationSchema})=>{
    const initialValues={
        ownerName:'',
        repositoryName:'',
        rating:'',
        review: ''
    };


    return(
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({handleSubmit})=>(
                <View style={styles.container}>
                    <FormikTextInput name='ownerName' placeholder='Repository owner name'/>
                    <FormikTextInput name='repositoryName' placeholder='Repository name'/>
                    <FormikTextInput name='rating' placeholder='Rating between 0 and 100'/>
                    <FormikTextInput name='review' placeholder='Review'/>
                    <TouchableWithoutFeedback onPress={handleSubmit}>
                        <View style={styles.button}>
                            <NativeText style={styles.textButton} fontSize='subheading'>Create a review</NativeText>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            )}
        </Formik>
    );
};

export default ReviewForm;