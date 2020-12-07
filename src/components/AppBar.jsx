import React from 'react';
import {View, StyleSheet,Text,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import {useQuery} from '@apollo/react-hooks';
import {Link} from 'react-router-native';
import {CHECK_AUTHORIZED_USER} from '../graphql/queries';
import SignOut from './Signout';


const styles=StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.barBackground,
        height: 50,
        display: "flex",
        alignItems: 'center',
        flexDirection: 'row',
    },
    tabStyle:{
        color: theme.colors.tabLabel,
        marginHorizontal: 20
    },

});

const AppBar=()=>{
    const {data}=useQuery(CHECK_AUTHORIZED_USER);
    if(!data){
        return null;
    }
    return <View style={styles.container}>
        <ScrollView horizontal style={styles.scrollViewStyle}>
            <Link to='/'><Text style={styles.tabStyle}>Repository</Text></Link>

            {data.authorizedUser===null
            ?<Link to='/signin'><Text style={styles.tabStyle}>Sign In</Text></Link>
            :<SignOut/>}

        </ScrollView>
    </View>;
};
export default AppBar;