import { Formik } from 'formik';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

import Text from './Text';
import useSignIn from '../hooks/useSignIn';

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

const validationSchema = yup.object().shape({
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
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
	const [signIn] = useSignIn();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const { data } = await signIn({ username, password });
			console.log(data);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default SignIn;
