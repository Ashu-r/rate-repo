import { gql } from '@apollo/client';

export const GET_REPOSITORY = gql`
	query GetRepository($id: ID!) {
		repository(id: $id) {
			fullName
			description
			ownerAvatarUrl
			language
			stargazersCount
			forksCount
			reviewCount
			ratingAverage
		}
	}
`;

export const ALL_REPOSITORIES = gql`
	query GetRepo {
		repositories {
			edges {
				node {
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
			}
		}
	}
`;
