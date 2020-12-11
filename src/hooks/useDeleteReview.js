import {useMutation} from '@apollo/react-hooks';
import {DELETE_REVIEW} from '../graphql/mutations';

 
const useDeleteReview=(id)=>{
    const [deleteReview,result] = useMutation(DELETE_REVIEW,{variables:{id}});

    return{
        deleteReview,
        result
    };
};

export default useDeleteReview;