import React,{useContext} from 'react';
import {TouchableWithoutFeedback,View,Text,StyleSheet} from 'react-native';
import theme from '../theme';
import AuthStorageContext from '../contexts/AuthStorageContext';
import {useApolloClient} from '@apollo/react-hooks';

const styles=StyleSheet.create({
    textStyle:{
        color: theme.colors.tabLabel
    },
});

const SignOut=()=>{
    const authStorage=useContext(AuthStorageContext);
    const apolloClient=useApolloClient();
    const handleSignOut=()=>{
        authStorage.removeAccessToken();
        apolloClient.resetStore();
    };
    
        return(
        <TouchableWithoutFeedback onPress={handleSignOut}>
            <View>
                <Text style={styles.textStyle}>
                    SignOut
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default SignOut;