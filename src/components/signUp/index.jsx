import React from 'react';
import SignUpForm from './SignUpForm';
import * as yup from 'yup';
import useCreateUser from '../../hooks/useCreateUser';

const validationSchema=yup.object().shape({
    username:yup.string().required()
    .min(1,'Username must be atleast 1 character').max(30,'Username must not be more than 30 characters'),
    password: yup.string().required()
    .min(5,'Password must be atleast 5 characters').max(50,'Password must not be more than 50 characters'),
    passConfirm: yup.string().oneOf([yup.ref('password'),null],'Password must match')
});

const SignUp=()=>{
    const [createUser]=useCreateUser();
    const handleSignUp=(values)=>{
        const {username,password}=values;
        createUser(username,password);
    };

    return(
        <SignUpForm onSubmit={handleSignUp} validationSchema={validationSchema}/>
    );
};

export default SignUp;