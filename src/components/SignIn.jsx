import { Formik } from 'formik';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';

import Text from './Text';

const styles = StyleSheet.create({
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

const initialValues = {
	username: '',
	password: '',
};

const SignInForm = ({ onSubmit }) => {
	return (
		<View>
			<FormikTextInput name='username' placeholder='Username' />
			<FormikTextInput name='password' placeholder='Password' secureTextEntry />
			<Pressable style={styles.button} onPress={onSubmit}>
				<Text style={styles.buttonText} fontWeight='bold' fontSize='subheading' color='white'>
					Sign In
				</Text>
			</Pressable>
		</View>
	);
};

const SignIn = () => {
	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default SignIn;