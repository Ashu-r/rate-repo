import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import useAuthorization from '../hooks/useAuthorization';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.appBar,
		fontSize: theme.fontSizes.heading,
	},
});

const AppBar = () => {
	const { authorization, loading } = useAuthorization();
	const SignTab = ({ loading, signedIn }) => {
		if (loading) {
			return null;
		}
		if (!signedIn || !signedIn.authorizedUser) {
			return (
				<>
					<AppBarTab title='Sign In' link='/signIn' />
					<AppBarTab title='Sign Up' link='/signUp' />
				</>
			);
		}
		return (
			<>
				<AppBarTab title='Create a review' link='/createReview' />

				<AppBarTab title='Sign Out' link='/signOut' />
			</>
		);
	};
	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<AppBarTab title='Repositories' link='/' />
				<SignTab loading={loading} signedIn={authorization} />
			</ScrollView>
		</View>
	);
};

export default AppBar;
