import React from 'react';
import {View,StyleSheet,TouchableWithoutFeedback,Alert} from 'react-native';
import {useHistory} from 'react-router-native';
import NativeText from './Text';
import theme from '../theme';
import {format} from 'date-fns';
import useDeleteReview from '../hooks/useDeleteReview';
const styles=StyleSheet.create({
    container:{
        // display: 'flex',
        // flexDirection:'row',
        backgroundColor: theme.colors.RepoListBgColor,
        maxWidth: '100%',
        paddingVertical: 15,
    },
    reviewContainer:{
        display: 'flex',
        flexDirection:'row',
    },
    ratingContainer:{
        borderColor: theme.colors.languageBgColor,
        width: 50,
        height: 50,
        borderRadius: 25,
        borderStyle: 'solid',
        borderWidth: 2,
    },
    buttonContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginTop: 10
    },
    ratingStyle:{
        marginHorizontal: 'auto',
        marginVertical: 'auto',   
    },
    reviewStyle:{
      display: 'flex',
      flexDirection:'column', 
      maxWidth: '77%',
      marginLeft: 10
    },
    viewButton:{
        backgroundColor: '#0165d4',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    deleteButton:{
        backgroundColor: '#d6394c',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    textButton:{
        color: theme.colors.tabLabel
    }
});
const ReviewItem=({review,action,refetch})=>{
    const data = review.node;
    const date=format(new Date(data.createdAt),'mm.dd.yyyy');
    const repoId=data.id.replace(/\./,'*').split('*')[1];
    const history=useHistory();
    const {deleteReview}=useDeleteReview(data.id);
    const viewRepo=()=>{
        history.push(`/singlerepoview/${repoId}`);
    };
    const deleteReviewHandle=()=>{
        //note that this feature may only work in android or ios since the alert only works there
        Alert.alert('Delete review','Are you sure you want to delete this review?',[
            {
                text:'DELETE',
                onPress:()=>{
                    deleteReview();
                    refetch();
                }
            },
            {
                text:'CANCEL'
            }
        ]);
    };
    return(
        <View style={styles.container}>
            <View style={styles.reviewContainer}>
            <View style={styles.ratingContainer}>
                <NativeText style={styles.ratingStyle} fontWeight='bold' color='primary'>{data.rating}</NativeText>
            </View>
            <View style={styles.reviewStyle}>
                <NativeText  fontWeight='bold'>{data.user.username}</NativeText>
                <NativeText color='textSecondary'>{date}</NativeText>
                <NativeText>{data.text}</NativeText>
            </View>
            </View>
            {action
            ? <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback onPress={viewRepo}>
                <View style={styles.viewButton}>
                    <NativeText style={styles.textButton} fontWeight='bold'>View Repository</NativeText>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={deleteReviewHandle}>
                <View style={styles.deleteButton}>
                    <NativeText style={styles.textButton} fontWeight='bold'>Delete Review</NativeText>
                </View>
            </TouchableWithoutFeedback>
            </View>
            :null}

        </View>
    );
};

export default ReviewItem;
