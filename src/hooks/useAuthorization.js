import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorization = () => {
	const { loading, data, refetch } = useQuery(AUTHORIZED_USER);

	return { authorization: data, loading, refetch };
};

export default useAuthorization;
