import React from 'react';
import {StyleSheet,View} from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import {Route,Switch,Redirect} from 'react-router-native';
import SignIn from './SignIn';

const styles=StyleSheet.create({
    container:{
        flexGrow:1,
        flexShrink:1,
        backgroundColor: theme.colors.MainBgColor
    },
});

const Main =()=>{
    return (
        <View style={styles.container}>
            <AppBar></AppBar>
            <Switch>
                <Route path='/signin' exact>
                    <SignIn/>
                </Route>
                <Route path='/' exact>
                    <RepositoryList/>
                </Route>
                <Redirect to='/'/>
            </Switch>
        </View>
    );
};


export default Main;