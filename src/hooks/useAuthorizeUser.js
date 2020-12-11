import {useQuery} from '@apollo/react-hooks';
import {CHECK_AUTHORIZED_USER} from '../graphql/queries';

const useAuthorizeUser=(includeReviews)=>{
    const{data,refetch}=useQuery(CHECK_AUTHORIZED_USER,{fetchPolicy:'cache-and-network',variables:{includeReviews}});
   
    
    return{
       data,
       refetch
    };
};

export default useAuthorizeUser;