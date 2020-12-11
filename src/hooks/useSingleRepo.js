import {useQuery} from '@apollo/react-hooks';
import {GET_SINGLE_REPO} from '../graphql/queries';

const useSingleRepo=(variables)=>{
    const{data,loading,fetchMore,...result}=useQuery(GET_SINGLE_REPO,{
        variables,
        fetchPolicy:'cache-and-network'
    });
    const handleFetchMore=()=>{
        const canFetchMore=!loading&&data&&data.repository.reviews.pageInfo.hasNextPage;
        if(!canFetchMore){
            return;
        }
        fetchMore({
            query: GET_SINGLE_REPO,
            variables:{
                after: data.repository.reviews.pageInfo.endCursor,
                ...variables,
            },
            //benerin update querynya
            updateQuery:(previousResult,{fetchMoreResult})=>{
               const nextResult={
                    repository:{
                        ...fetchMoreResult.repository,
                        reviews:{
                            ...fetchMoreResult.repository.reviews,
                            edges:[
                                ...fetchMoreResult.repository.reviews.edges,
                                ...previousResult.repository.reviews.edges
                            ]
                        },
                    },
               };
               return nextResult;
            }
        });
    };
    return{
        data,
        fetchMore: handleFetchMore,
        loading,
        ...result,
    };
};

export default useSingleRepo;