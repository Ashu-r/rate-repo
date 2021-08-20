import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
	const { loading, data, refetch } = useQuery(GET_REPOSITORY, { variables: { id }, fetchPolicy: 'cache-and-network' });

	return { repository: data, loading, refetch };
};

export default useRepository;
