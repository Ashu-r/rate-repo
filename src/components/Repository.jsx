import React from 'react';
import { FlatList, View } from 'react-native';
import { BackButton, useParams } from 'react-router-native';
import * as Linking from 'expo-linking';
import useRepository from '../hooks/useRepository';
import { RepoItem } from './RepositoryItem';
import WideBtn from './WideBtn';
import ReviewItem from './ReviewItem';
import { ItemSeparator } from './RepositoryList';

const Repository = () => {
	const { id } = useParams();
	const { loading, repository, fetchMore } = useRepository({ id, first: 4 });
	if (loading) {
		return null;
	}
	const handlePress = () => {
		Linking.openURL(`https://www.github.com/${repository.fullName}`);
	};

	const RepoHeading = () => {
		return (
			<View>
				<RepoItem item={repository} />
				<WideBtn text='Open in GitHub' onPress={handlePress} />
				<ItemSeparator />
				<BackButton />
			</View>
		);
	};
	// console.log('repo' + repository);
	const reviews = repository?.reviews?.edges.map((e) => e.node);
	// console.log('re' + reviews);
	const onEndReach = () => {
		fetchMore();
	};
	return (
		<FlatList
			ListHeaderComponent={() => <RepoHeading />}
			data={reviews}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={ReviewItem}
			keyExtractor={({ id }) => id}
			onEndReached={onEndReach}
			onEndReachedThreshold={0.5}
		/>
	);
};

export default Repository;
