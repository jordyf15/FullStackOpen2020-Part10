import React from 'react';
// import {useQuery} from '@apollo/react-hooks';
import RepositoryItem from './RepositoryItem';
import {useParams} from 'react-router-native';
// import {GET_SINGLE_REPO} from '../graphql/queries';
import {StyleSheet,FlatList,View} from 'react-native';
import ReviewItem from './ReviewItem';
import useSingleRepo from '../hooks/useSingleRepo';

const styles=StyleSheet.create({
    separator:{
        height: 10
    },
});

const ItemSeparator=()=><View style={styles.separator}/>;

const SingleRepository=()=>{
    const {id} = useParams();
    // const {data}=useQuery(GET_SINGLE_REPO,{variables:{id: id}});
    const {data,fetchMore}=useSingleRepo({id});
    if(!data){
        return null;
    }
    const reviews=data.repository.reviews.edges.map(node=>node);

    const onEndReach=()=>{
        fetchMore();
    };

    return (
        <FlatList
            data={reviews}
            renderItem={({item})=><ReviewItem review={item}/>}
            keyExtractor={({node})=>node.id}
            ListHeaderComponent={<RepositoryItem data={data.repository}/>}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        >
        </FlatList>
    );
};

export default SingleRepository;