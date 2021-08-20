import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
	white: {
		backgroundColor: 'white',
	},

	button: {
		justifyContent: 'center',
		backgroundColor: theme.colors.primary,
		padding: 10,
		height: 50,
		margin: 10,
		borderRadius: 2,
	},
	buttonText: {
		alignSelf: 'center',
	},
});

const WideBtn = ({ onPress, text }) => {
	return (
		<View style={styles.white}>
			<Pressable style={styles.button} onPress={onPress}>
				<Text style={styles.buttonText} fontWeight='bold' testID='submitButton' fontSize='subheading' color='white'>
					{text}
				</Text>
			</Pressable>
		</View>
	);
};

export default WideBtn;
