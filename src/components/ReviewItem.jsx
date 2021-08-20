import React from 'react';
import { StyleSheet, View } from 'react-native';
import { format } from 'date-fns';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
	comment: {
		flex: 0,
		flexDirection: 'row',
		backgroundColor: 'white',
		padding: 15,
	},
	rating: {
		alignItems: 'center',
		marginRight: 10,
		width: 50,
		height: 50,
		borderWidth: 2,
		borderColor: theme.colors.primary,
		borderRadius: 25,
	},
	ratingText: {
		paddingTop: 12.5,
	},
	meta: {
		flex: 1,
	},
});

const ReviewItem = ({ item }) => {
	return (
		<View style={styles.comment}>
			<View style={styles.rating}>
				<Text fontWeight='bold' fontSize='subheading' color='primary' style={styles.ratingText}>
					{item.rating}
				</Text>
			</View>
			<View style={styles.meta}>
				<Text fontWeight='bold'>{item.user.username}</Text>
				<Text color='textSecondary'>{format(Date.parse(item.createdAt), 'dd/MM/yyyy')}</Text>
				<Text>{item.text}</Text>
			</View>
		</View>
	);
};

export default ReviewItem;
