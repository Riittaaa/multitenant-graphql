import { gql,useMutation} from "@apollo/client";
// import { Mutation } from '@apollo/react-components';

// export const CREATE_CHARACTER_MUTATION = gql`
// mutation`;


// export const LOGIN=gql`
// mutation Login($input: LoginUserInput!) {
//     loginUser(input: $input) {
//       message
//       errors
//     }
//   }
// `

export const LOGIN = gql`
  mutation Login($input: LoginUserInput!) {
    loginUser(input: $input) {
    user{
    id
    }
      message
      errors
    }
  }
`;

export const CREATEPROFILE=gql`
mutation Profile($input: CreateProfileInput!) {
    createProfile(input: $input) {
      message
      errors
    }
  }
  `;

// const CREATE_LINK_MUTATION = gql`
//   mutation PostMutation(
//     $description: String!
//     $url: String!
//   ) {
//     post(description: $description, url: $url) {
//       id
//       createdAt
//       url
//       description
//     }
//   }
// `;
