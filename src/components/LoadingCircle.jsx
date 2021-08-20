import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10,
	},
});

const LoadingCircle = () => {
	return (
		<View style={[styles.container, styles.horizontal]}>
			<ActivityIndicator size='large' color='#00ff00' />
		</View>
	);
};

export default LoadingCircle;
