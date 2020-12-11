import React from 'react';
import SignInForm from './SignInForm';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const validationSchema=yup.object().shape({
    username: yup.string()
    .required('Username is required')
    ,
    password: yup.string()
    .required('Password is required')
});


const SignIn =()=>{
    const [signIn] = useSignIn();
    const handleLogin=async(values)=>{
        const {username,password}=values;
        try{
            await signIn(username,password);
        }catch(err){
            console.log(err);
        }
    };

    return <SignInForm handleLogin={handleLogin} validationSchema={validationSchema}/>;

};

export default SignIn;