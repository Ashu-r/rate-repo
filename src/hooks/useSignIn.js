import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
	const [mutate, result] = useMutation(AUTHORIZE);
	const apolloClient = useApolloClient();
	const authStorage = useAuthStorage();

	const signIn = async ({ username, password }) => {
		const { data } = await mutate({ variables: { username, password } });
		await authStorage.setAccessToken(data.authorize.accessToken);
		apolloClient.resetStore();
		return data;
	};

	return [signIn, result];
};

export default useSignIn;
