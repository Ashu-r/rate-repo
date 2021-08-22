import { gql } from '@apollo/client';
import { REPO_DATA, REVIEWS } from './fragments';

export const GET_REPOSITORY = gql`
	${REPO_DATA}
	${REVIEWS}
	query GetRepository($id: ID!) {
		repository(id: $id) {
			...RepoData
			reviews {
				...Reviews
			}
		}
	}
`;

export const ALL_REPOSITORIES = gql`
	${REPO_DATA}
	query ($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy) {
		repositories(orderDirection: $orderDirection, orderBy: $orderBy) {
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
