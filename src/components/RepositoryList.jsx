import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import LoadingCircle from './LoadingCircle';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

export const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
	const [sort, setSort] = useState('CREATED_AT');
	const { repositories, loading } = useRepositories(sort);
	// Get the nodes from the edges array
	if (loading) {
		return <LoadingCircle />;
	}
	console.log(repositories);
	const SelectSort = () => {
		return (
			<Picker selectedValue={sort} onValueChange={(value) => setSort(value)}>
				<Picker.Item label='Latest repositories' value='CREATED_AT' />
				<Picker.Item label='Highest rated repositories' value='RATING_DESC' />
				<Picker.Item label='Lowest rated repositories' value='RATING_ASC' />
			</Picker>
		);
	};
	const repositoryNodes = repositories ? repositories.repositories.edges.map((edge) => edge.node) : [];
	return <FlatList data={repositoryNodes} ListHeaderComponent={SelectSort} ItemSeparatorComponent={ItemSeparator} renderItem={RepositoryItem} />;
};

export default RepositoryList;
