import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { StatusBar } from 'expo-status-bar';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Repository from './Repository';
import Review from './Review';
import SignUp from './SignUp';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,

		backgroundColor: '#e1e4e8',
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<StatusBar style='light' />
			<AppBar />
			<Switch>
				<Route path='/' exact>
					<RepositoryList />
				</Route>
				<Route path='/signIn' exact>
					<SignIn />
				</Route>
				<Route path='/signOut' exact>
					<SignOut />
				</Route>
				<Route path='/repository/:id' exact>
					<Repository />
				</Route>
				<Route path='/createReview' exact>
					<Review />
				</Route>
				<Route path='/myReviews' exact>
					<MyReviews />
				</Route>
				<Route path='/signUp' exact>
					<SignUp />
				</Route>
				<Redirect to='/' />
			</Switch>
		</View>
	);
};

export default Main;
