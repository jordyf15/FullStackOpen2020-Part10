import React from 'react';
import NativeText from './Text';
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import FormikTextInput from './FormikTextInput';
import {Formik} from 'formik';
import theme from '../theme';

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
        height: 40,
        borderRadius: 10
    },
    textButton:{
        textAlign: 'center',
        color: theme.colors.tabLabel,
        lineHeight: 40
    }
});

const SignInForm=({handleLogin,validationSchema})=>{
    const initialValues={
        username: '',
        password: '',
    };

    return <Formik initialValues={initialValues} onSubmit={handleLogin} validationSchema={validationSchema} >
        {({handleSubmit})=>(
             <View style={styles.container}>
             <FormikTextInput testID='username' name='username' placeholder='Username' />
             <FormikTextInput testID='password' name='password' placeholder='Password' secureTextEntry={true} />
             <TouchableWithoutFeedback testID='submit' onPress={handleSubmit}>
                 <View style={styles.button}>
                     <NativeText style={styles.textButton} fontSize='subheading' >Sign In</NativeText>
                 </View>
             </TouchableWithoutFeedback>
         </View>
        )}
    </Formik>;
};

export default SignInForm;