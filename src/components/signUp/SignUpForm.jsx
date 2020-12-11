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
        height: 300
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

const SignUpForm=({onSubmit,validationSchema})=>{
    const initialValues={
        username:'',
        password:'',
        passConfirm:''
    };

    return(
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
            {({handleSubmit})=>(
                 <View style={styles.container}>
                    <FormikTextInput name='username' placeholder='Username'/>
                    <FormikTextInput name='password' placeholder='Password' secureTextEntry={true}/>
                    <FormikTextInput name='passConfirm' placeholder='Password confirmation' secureTextEntry={true}/>
                    <TouchableWithoutFeedback onPress={handleSubmit}>
                        <View style={styles.button}>
                            <NativeText style={styles.textButton} fontSize='subheading'>Sign Up</NativeText>
                        </View>     
                    </TouchableWithoutFeedback> 
                 </View>
        )}
        </Formik>
    );
};

export default SignUpForm;