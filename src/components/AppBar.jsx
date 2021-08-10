import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.appBar,
		fontSize: theme.fontSizes.heading,
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<AppBarTab title='Repositories' link='/' />
			<AppBarTab title='Sign In' link='/signIn' />
		</View>
	);
};

export default AppBar;
