import {gql} from 'apollo-boost';

export const LOGIN_USER=gql`
mutation loginUser($username: String!, $password: String!){
    authorize(credentials:{username: $username, password: $password}){
    accessToken
    }
}
`;