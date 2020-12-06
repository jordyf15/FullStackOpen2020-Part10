import React from 'react';
import {View, StyleSheet,Text,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
// import AppBarTab from './AppBarTab';
import {Link} from 'react-router-native';


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
    return <View style={styles.container}>
        <ScrollView horizontal style={styles.scrollViewStyle}>
            <Link to='/'><Text style={styles.tabStyle}>Repository</Text></Link>
            {/* <Link to='/' component={AppBarTab} tabLabel='Repository'/> */}
            <Link to='/signin'><Text style={styles.tabStyle}>Sign In</Text></Link>
            {/* <Link to='/signin' component={AppBarTab} tabLabel='Sign In'/> */}
        </ScrollView>
    </View>;
};
export default AppBar;