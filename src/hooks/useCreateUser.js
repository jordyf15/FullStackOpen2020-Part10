import {useMutation} from '@apollo/react-hooks';
import {SIGN_UP} from '../graphql/mutations';
import useSignIn from './useSignIn';

const useCreateUser=()=>{
    const [signUp,result]=useMutation(SIGN_UP);
    const [signIn]=useSignIn();
    const createUser=async(username,password)=>{
        await signUp({variables:{username,password}});
        await signIn(username,password);
    };
    return[createUser,result];
};

export default useCreateUser;