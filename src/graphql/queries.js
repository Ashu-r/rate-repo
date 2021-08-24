import { gql } from '@apollo/client';
import { REPO_DATA, REVIEWS } from './fragments';

export const GET_REPOSITORY = gql`
	${REPO_DATA}
	${REVIEWS}
	query GetRepository($id: ID!, $first: Int, $after: String) {
		repository(id: $id) {
			...RepoData
			reviews(first: $first, after: $after) {
				...Reviews
			}
		}
	}
`;

export const ALL_REPOSITORIES = gql`
	${REPO_DATA}
	query ($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String, $first: Int, $after: String) {
		repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword, first: $first, after: $after) {
			edges {
				cursor
				node {
					...RepoData
				}
			}
			pageInfo {
				hasNextPage
				hasPreviousPage
				endCursor
				startCursor
			}
			totalCount
		}
	}
`;

export const AUTHORIZED_USER = gql`
	${REVIEWS}
	query ($includeReviews: Boolean = false, $first: Int, $after: String) {
		authorizedUser {
			id
			username
			reviews(first: $first, after: $after) @include(if: $includeReviews) {
				...Reviews
			}
		}
	}
`;
