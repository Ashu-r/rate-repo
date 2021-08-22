import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
	border: {
		borderWidth: 1,
		borderColor: theme.colors.textSecondary,
		borderRadius: 6,
	},
	loginField: {
		padding: 10,
		height: 50,
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
	},
});

const TextInput = ({ style, ...props }) => {
	const textInputStyle = [styles.border, styles.loginField, style];

	return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
