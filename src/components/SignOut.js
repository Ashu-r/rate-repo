import { useApolloClient } from '@apollo/client';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';
import Text from './Text';

const SignOut = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const history = useHistory();
	// console.log('logging out view');
	const onSignOut = async () => {
		// console.log('logging out');
		await authStorage.removeAccessToken();
		await apolloClient.resetStore();
		history.push('/');
	};

	useEffect(() => {
		onSignOut();
	}, []);

	return (
		<Text fontWeight='bold' fontSize='subheading'>
			Signing Out
		</Text>
	);
};

export default SignOut;
