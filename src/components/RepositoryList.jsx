import React from 'react';
import RepositoryListContainer from './RepositoryListContainer';
import RNPickerSelect from 'react-native-picker-select';
import {View,StyleSheet} from 'react-native';
import {useDebounce} from 'use-debounce';
import {Searchbar} from 'react-native-paper';
import useRepositories from '../hooks/useRepositories';

const styles=StyleSheet.create({
  picker:{
    height: 50,
  },
  searchBar:{
    width: '95%',
    marginHorizontal: 'auto',
    marginVertical: 10
  },
});

  const RepositoryList=()=>{
    const [sort,setSort]=React.useState('Latest repositories');
    const [filter,setFilter]=React.useState('');
    const [searchKeyword]=useDebounce(filter,500);

    const orderBy=sort==='Latest repositories'?'CREATED_AT':'RATING_AVERAGE';
    const orderDirection=sort==='Lowest rated repositories'?'ASC':'DESC';
    const {repositories,fetchMore}=useRepositories({orderDirection,orderBy,searchKeyword});
  

    const onEndReach=()=>{
      fetchMore();
    };

    return<View>
      <View>
        <Searchbar
          placeholder='search'
          onChangeText={(value)=>setFilter(value)}
          value={filter} 
          style={styles.searchBar}/>
              <RNPickerSelect
            onValueChange={(value) => setSort(value)}
            items={[
                { label: 'Latest repositories', value: 'Latest repositories' },
                { label: 'Highest rated repositories', value: 'Highest rated repositories' },
                { label: 'Lowest rated repositories', value: 'Lowest rated repositories' },
                
            ]}
            placeholder={{}}
        /> 
        </View>
            <RepositoryListContainer onEndReach={onEndReach} data={repositories}/>
          </View>;
  };

  export default RepositoryList;
