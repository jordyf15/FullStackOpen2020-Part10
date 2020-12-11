import React from 'react';
import ReviewForm from './ReviewForm';
import * as yup from 'yup';
import useCreateReview from '../../hooks/useCreateReview';

const validationSchema =yup.object().shape({
    ownerName:yup.string().required('Repository owner name is required'),
    repositoryName:yup.string().required('Repository name is required'),
    rating: yup.number().required('Rating is required').min(0).max(100)
});
const CreateReview=()=>{
    const [createReview]=useCreateReview();
    const onSubmit=(values)=>{
        const {repositoryName,ownerName,rating,review}=values;
        createReview(repositoryName,ownerName,rating,review);
    };
    return(
        <ReviewForm onSubmit={onSubmit} validationSchema={validationSchema}/>
    );
};

export default CreateReview;