import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BackButton, useParams } from 'react-router-native';
import * as Linking from 'expo-linking';
import useRepository from '../hooks/useRepository';
import LoadingCircle from './LoadingCircle';
import { RepoItem } from './RepositoryItem';
import WideBtn from './WideBtn';

const styles = StyleSheet.create({
	white: {
		backgroundColor: 'white',
	},
});

const Repository = () => {
	const { id } = useParams();
	const { repository, loading } = useRepository(id);

	console.log(repository);

	const handlePress = () => {
		Linking.openURL(`https://www.github.com/${repository.repository.fullName}`);
	};

	if (loading) {
		return <LoadingCircle />;
	}
	return (
		<View style={styles.white}>
			<RepoItem item={repository.repository} />
			<WideBtn text='Open in GitHub' onPress={handlePress} />
			<BackButton />
		</View>
	);
};

export default Repository;
