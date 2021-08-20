import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { BackButton, useParams } from 'react-router-native';
import * as Linking from 'expo-linking';
import useRepository from '../hooks/useRepository';
import LoadingCircle from './LoadingCircle';
import { RepoItem } from './RepositoryItem';
import WideBtn from './WideBtn';
import ReviewItem from './ReviewItem';
import { ItemSeparator } from './RepositoryList';

const Repository = () => {
	const { id } = useParams();
	const { data, loading } = useRepository(id);

	const handlePress = () => {
		Linking.openURL(`https://www.github.com/${data.repository.fullName}`);
	};

	if (loading) {
		return <LoadingCircle />;
	}

	const RepoHeading = () => {
		return (
			<View>
				<RepoItem item={data.repository} />
				<WideBtn text='Open in GitHub' onPress={handlePress} />
				<ItemSeparator />
				<BackButton />
			</View>
		);
	};
	const reviews = data.repository.reviews.edges.map((e) => e.node);
	console.log(reviews);
	return (
		<FlatList
			ListHeaderComponent={() => <RepoHeading />}
			data={reviews}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={ReviewItem}
			keyExtractor={({ id }) => id}
		/>
	);
};

export default Repository;
