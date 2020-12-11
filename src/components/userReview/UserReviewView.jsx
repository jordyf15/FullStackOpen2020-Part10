import React from 'react';
import {FlatList,View,StyleSheet} from 'react-native';
import useAuthorizedUser from '../../hooks/useAuthorizeUser';
import ReviewItem from '../ReviewItem';

const styles=StyleSheet.create({
    separator:{
        height: 10
    },
});

const ItemSeparator=()=><View style={styles.separator}/>;

const UserReviewView=()=>{
    const{data,refetch}=useAuthorizedUser(true);
   
    if(!data){
        return null;
    }
    const reviews=data.authorizedUser.reviews.edges.map(r=>r);
    return(
        <FlatList
        data={reviews}
        renderItem={({item})=><ReviewItem review={item} action={true} refetch={refetch}/>}
        keyExtractor={({node})=>node.id}
        ItemSeparatorComponent={ItemSeparator}
        >
        </FlatList>
    );
};

export default UserReviewView;