import React from 'react';
import {StyleSheet,View} from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import {Route,Switch,Redirect} from 'react-router-native';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import CreateReview from './createReview/index';
import SignUp from './signUp/index';
import UserReviewView from './userReview/UserReviewView';

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
                <Route path='/singlerepoview/:id' exact>
                    <SingleRepository/>
                </Route>
                <Route path='/reviewform'exact>
                    <CreateReview/>
                </Route>
                <Route path='/signup' exact>
                    <SignUp/>
                </Route>
                <Route path='/userreview' exact>
                    <UserReviewView/>
                </Route>
                <Redirect to='/'/>
            </Switch>
        </View>
    );
};


export default Main;