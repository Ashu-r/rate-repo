import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortMethod) => {
	const orderDirection = sortMethod === 'RATING_ASC' ? 'ASC' : 'DESC';
	const orderBy = sortMethod === 'CREATED_AT' ? sortMethod : 'RATING_AVERAGE';
	const { loading, data, refetch } = useQuery(ALL_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
		variables: {
			orderDirection,
			orderBy,
		},
	});

	return { repositories: data, loading, refetch };
};

export default useRepositories;
