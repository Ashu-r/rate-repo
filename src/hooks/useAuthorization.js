import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorization = (variables) => {
	const { loading, data, refetch, fetchMore } = useQuery(AUTHORIZED_USER, { variables });
	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.authorizedUser.reviews.pageInfo.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				after: data.authorizedUser.reviews.pageInfo.endCursor,
				...variables,
			},
		});
	};

	return { authorization: data?.authorizedUser, refetch, loading, fetchMore: handleFetchMore };
};

export default useAuthorization;
