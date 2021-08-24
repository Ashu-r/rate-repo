import React from 'react';
import { StyleSheet, FlatList, View, Alert } from 'react-native';
import ReviewItem from './ReviewItem';
import { ItemSeparator } from './RepositoryList';
import useAuthorization from '../hooks/useAuthorization';
import { useHistory } from 'react-router-native';
import WideBtn from './WideBtn';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const styles = StyleSheet.create({
	buttons: {
		backgroundColor: 'white',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		paddingLeft: 25,
		paddingRight: 25,
	},
	red: {
		backgroundColor: 'red',
	},
});
const MyReviewItem = ({ item, refetch }) => {
	const history = useHistory();
	const [mutate] = useMutation(DELETE_REVIEW);
	const onView = (id) => {
		history.push(`/repository/${id}`);
	};
	const onDelete = (id) => {
		Alert.alert('Delete Review?', 'Are you sure you want to delete this review?', [
			{
				text: 'Cancel',
				style: 'cancel',
			},
			{
				text: 'DELETE',
				onPress: async () => {
					await mutate({ variables: { id } });
					refetch();
				},
			},
		]);
	};
	return (
		<View>
			<ReviewItem item={item} type={'myReview'} />
			<View style={styles.buttons}>
				<WideBtn style={styles.button} text='View Repository' onPress={() => onView(item.repositoryId)} />
				<WideBtn style={[styles.button, styles.red]} text='Delete Review' onPress={() => onDelete(item.id)} />
			</View>
		</View>
	);
};

const MyReviews = () => {
	const { authorization, refetch, fetchMore } = useAuthorization({ includeReviews: true, first: 5 });
	console.log(authorization);
	const reviews = authorization?.reviews?.edges.map((e) => e.node);
	const onEndReach = () => {
		fetchMore();
	};
	return (
		<FlatList
			data={reviews}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => <MyReviewItem item={item} refetch={refetch} />}
			keyExtractor={({ id }) => id}
			onEndReached={onEndReach}
			onEndReachedThreshold={0.5}
		/>
	);
};

export default MyReviews;
