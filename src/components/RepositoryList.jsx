import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce/lib';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

export const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
	repoHeader = () => {
		const props = this.props;
		return (
			<>
				<Searchbar placeholder='Search' onChangeText={(query) => props.setSearch(query)} value={props.search} />
				<Picker selectedValue={props.sort} onValueChange={(value) => props.setSort(value)}>
					<Picker.Item label='Latest repositories' value='CREATED_AT' />
					<Picker.Item label='Highest rated repositories' value='RATING_DESC' />
					<Picker.Item label='Lowest rated repositories' value='RATING_ASC' />
				</Picker>
			</>
		);
	};
	render() {
		const props = this.props;
		return (
			<FlatList
				data={props.repositoryNodes}
				ListHeaderComponent={this.repoHeader}
				ItemSeparatorComponent={ItemSeparator}
				renderItem={RepositoryItem}
				onEndReached={props.onEndReach}
				onEndReachedThreshold={0.5}
			/>
		);
	}
}

const RepositoryList = () => {
	const [sort, setSort] = useState('CREATED_AT');
	const [search, setSearch] = useState();
	const [debounceSearch] = useDebounce(search, 500);
	const orderDirection = sort === 'RATING_ASC' ? 'ASC' : 'DESC';
	const orderBy = sort === 'CREATED_AT' ? sort : 'RATING_AVERAGE';
	const { repositories, fetchMore } = useRepositories({ first: 8, orderBy, orderDirection, searchKeyword: debounceSearch });
	// console.log(repositories);
	const onEndReach = () => {
		fetchMore();
	};
	const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];
	return (
		<RepositoryListContainer
			onEndReach={onEndReach}
			search={search}
			setSearch={setSearch}
			sort={sort}
			setSort={setSort}
			repositoryNodes={repositoryNodes}
		/>
	);
};

export default RepositoryList;
