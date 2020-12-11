import {useMutation} from '@apollo/react-hooks';
import {useHistory} from 'react-router-native';
import {CREATE_REVIEW} from '../graphql/mutations';

const useCreateReview=()=>{
    const [create,result]=useMutation(CREATE_REVIEW);
    const history=useHistory();

    const createReview=async(repositoryName,ownerName,rating,text)=>{
        const intRating=parseInt(rating);
        const {data}=await create({variables:{repositoryName,ownerName,rating:intRating,text}});
        const id=data.createReview.repositoryId;
        history.push(`/singlerepoview/${id}`);
        return id;
    };
    return [createReview,result];
};

export default useCreateReview;