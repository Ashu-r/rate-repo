import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.appBar,
		fontSize: theme.fontSizes.heading,
	},
	text: {
		paddingTop: 15,
		paddingBottom: 20,
		paddingLeft: 15,
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<Pressable>
				<Text color='white' fontSize='heading' style={styles.text}>
					Repositories
				</Text>
			</Pressable>
		</View>
	);
};

export default AppBar;
