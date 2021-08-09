import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			{/* <Text>Rate Repository Application</Text> */}
			<StatusBar style='light' />
			<AppBar />
			<RepositoryList />
		</View>
	);
};

export default Main;
