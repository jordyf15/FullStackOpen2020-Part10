import {gql} from 'apollo-boost';

export const LOGIN_USER=gql`
mutation loginUser($username: String!, $password: String!){
    authorize(credentials:{username: $username, password: $password}){
    accessToken
    }
}
`;

export const CREATE_REVIEW=gql`
mutation createReview($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String){
    createReview(review:{
        repositoryName: $repositoryName,
        ownerName: $ownerName,
        rating:$rating,
        text: $text
      }){
        repositoryId
      }
}
`;

export const DELETE_REVIEW=gql`
mutation deleteReview($id: ID!){
  deleteReview(id:$id)
}
`;

export const SIGN_UP=gql`
mutation signUp($username: String!,$password: String!){
  createUser(user:{
    username: $username,
    password: $password
  }){
    username,
    id
  }
}
`;