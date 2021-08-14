import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
	const { loading, error, data, refetch } = useQuery(ALL_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
	});

	return { repositories: data, loading, refetch };
};

export default useRepositories;
