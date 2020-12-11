import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    separator:{
        height: 10
    },
});



const ItemSeparator=()=><View style={styles.separator}/>;

const RepositoryListContainer=({data,onEndReach})=>{
    const repositoryNodes=data
    ?data.edges.map(edge=>edge.node)
    :[];

      return (
          <View>
            <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({item})=>(
                    <RepositoryItem data={item}/>
            )}
            keyExtractor={(item)=>item.id}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
            />
          </View>
      );
};

export default RepositoryListContainer;