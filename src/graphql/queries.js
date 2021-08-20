import { gql } from '@apollo/client';
import { REPO_DATA } from './fragments';

export const GET_REPOSITORY = gql`
	${REPO_DATA}
	query GetRepository($id: ID!) {
		repository(id: $id) {
			...RepoData
		}
	}
`;

export const ALL_REPOSITORIES = gql`
	${REPO_DATA}
	query GetRepo {
		repositories {
			edges {
				node {
					...RepoData
				}
			}
		}
	}
`;

export const AUTHORIZED_USER = gql`
	query {
		authorizedUser {
			id
			username
		}
	}
`;
