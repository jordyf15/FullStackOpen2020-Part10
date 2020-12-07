import {useMutation,useApolloClient} from '@apollo/react-hooks';
import {LOGIN_USER} from '../graphql/mutations';
import {useContext} from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import {useHistory} from 'react-router-native';
// import {useApolloClient} from 'apollo-boost';

const useSignIn=()=>{
    const authStorage = useContext(AuthStorageContext);
    const[mutate,result]=useMutation(LOGIN_USER);
    const apolloClient=useApolloClient();
    const history=useHistory();

    const signIn=async(username,password)=>{
        const {data}=await mutate({variables:{username,password}});
        const token=data.authorize.accessToken;
        await authStorage.setAccessToken(token);
        apolloClient.resetStore();
        history.push('/');
        return token;
    };
    return [signIn,result];
};

export default useSignIn;