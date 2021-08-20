import React from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import LoadingCircle from './LoadingCircle';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
	const { repositories, loading } = useRepositories();

	// Get the nodes from the edges array
	if (loading) {
		return <LoadingCircle />;
	}
	// console.log(repositories.repositories.edges.map((edge) => edge.node));
	const repositoryNodes = repositories ? repositories.repositories.edges.map((edge) => edge.node) : [];
	return <FlatList data={repositoryNodes} ItemSeparatorComponent={ItemSeparator} renderItem={RepositoryItem} />;
};

export default RepositoryList;
