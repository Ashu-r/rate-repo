import { gql } from '@apollo/client';

export const REPO_DATA = gql`
	fragment RepoData on Repository {
		id
		fullName
		description
		ownerAvatarUrl
		language
		stargazersCount
		forksCount
		reviewCount
		ratingAverage
	}
`;

export const REVIEWS = gql`
	fragment Reviews on ReviewConnection {
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
		}
	}
`;
