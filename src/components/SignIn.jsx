import React from 'react';
import NativeText from './Text';
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import FormikTextInput from './FormikTextInput';
import {Formik} from 'formik';
import theme from '../theme';
import * as yup from 'yup';

const initialValues={
    username: '',
    password: '',
};

const styles=StyleSheet.create({
    container:{
        backgroundColor: theme.colors.RepoListBgColor,
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        height: 200
    },
    button:{
        backgroundColor: theme.colors.primary,
        width: '90%',
        height: '20%',
        borderRadius: 10
    },
    textButton:{
        textAlign: 'center',
        color: theme.colors.tabLabel,
        lineHeight: '250%'
    }
});

const validationSchema=yup.object().shape({
    username: yup.string()
    .required('Username is required')
    ,
    password: yup.string()
    .required('Password is required')
});

const SignIn =()=>{
    return <Formik initialValues={initialValues} onSubmit={(values)=>console.log(values)} validationSchema={validationSchema} >
        {({handleSubmit})=>(
             <View style={styles.container}>
             <FormikTextInput name='username' placeholder='Username' />
             <FormikTextInput name='password' placeholder='Password' secureTextEntry={true} />
             <TouchableWithoutFeedback onPress={handleSubmit}>
                 <View style={styles.button}>
                     <NativeText style={styles.textButton} fontSize='subheading' >Sign In</NativeText>
                 </View>
             </TouchableWithoutFeedback>
         </View>
        )}
    </Formik>;
};

export default SignIn;