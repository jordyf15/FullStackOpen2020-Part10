import {gql} from 'apollo-boost';

export const GET_REPOSITORIES=gql`
query {
    repositories {
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
              }
        }    
      }
  }
`;

export const CHECK_AUTHORIZED_USER=gql`
query{
  authorizedUser{
    id,
    username
  }
}
`;