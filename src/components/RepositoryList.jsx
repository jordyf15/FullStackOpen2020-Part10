import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import RepositoryItem from './RepositoryItem';
import {useQuery} from '@apollo/react-hooks';
import {GET_REPOSITORIES} from '../graphql/queries';

const styles = StyleSheet.create({
    separator:{
        height: 10
    },
});



  const ItemSeparator=()=><View style={styles.separator}/>;

  const RepositoryList=()=>{
    const {data} = useQuery(GET_REPOSITORIES,{fetchPolicy:'cache-and-network'});

    const repositoryNodes=data
    ?data.repositories.edges.map(edge=>edge.node)
    :[];

      return (
          <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({item})=>(
            <RepositoryItem key={item.id} data={item}/>
          )}
          />
      );
  };

  export default RepositoryList;
