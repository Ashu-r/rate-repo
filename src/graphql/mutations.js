import { gql } from '@apollo/client';

export const AUTHORIZE = gql`
	mutation ($username: String!, $password: String!) {
		authorize(credentials: { username: $username, password: $password }) {
			accessToken
		}
	}
`;

export const CREATE_REVIEW = gql`
	mutation ($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String) {
		createReview(review: { repositoryName: $repositoryName, ownerName: $ownerName, rating: $rating, text: $text }) {
			id
			user {
				username
			}
			repositoryId
			rating
			createdAt
			text
		}
	}
`;

export const CREATE_USER = gql`
	mutation ($username: String!, $password: String!) {
		createUser(user: { username: $username, password: $password }) {
			id
			username
			createdAt
		}
	}
`;

export const DELETE_REVIEW = gql`
	mutation ($id: ID!) {
		deleteReview(id: $id)
	}
`;
