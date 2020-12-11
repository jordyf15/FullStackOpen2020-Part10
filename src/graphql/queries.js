import {gql} from 'apollo-boost';

export const GET_REPOSITORIES=gql`
query getRepositories($orderDirection: OrderDirection,$orderBy: AllRepositoriesOrderBy,$searchKeyword:String,$after:String){
    repositories(first: 20,orderDirection: $orderDirection,orderBy:$orderBy,searchKeyword: $searchKeyword,after:$after) {
      edges{
        node {
          ownerName,
          id,
          ownerAvatarUrl,
          fullName,
          description,
          language,
          stargazersCount,
          forksCount,
          ratingAverage,
          reviewCount
        },
        cursor
      },
      pageInfo{
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
  }
  }
`;

export const GET_SINGLE_REPO=gql`
query singleRepo($id: ID!,$after: String){
  repository(id: $id) {
    id
    fullName
    language,
    description,
    url,
    ownerAvatarUrl,
    forksCount,
    reviewCount,
    ratingAverage,
    stargazersCount,
    reviews(first: 2,after:$after) {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
        cursor
      }
      pageInfo{
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
}
`;

export const CHECK_AUTHORIZED_USER=gql`
query($includeReviews: Boolean = false){
  authorizedUser{
    id,
    username,
    reviews @include(if: $includeReviews){
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
        cursor
      }
      pageInfo{
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
}
`;