import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
	const { loading, data, fetchMore, ...result } = useQuery(ALL_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
		variables,
	});

	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				after: data.repositories.pageInfo.endCursor,
				...variables,
			},
		});
	};

	return { repositories: data?.repositories, loading, fetchMore: handleFetchMore, ...result };
};

export default useRepositories;
