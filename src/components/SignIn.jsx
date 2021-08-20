import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';
import WideBtn from './WideBtn';

const validationSchema = yup.object().shape({
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
});

const initialValues = {
	username: '',
	password: '',
};

const styles = StyleSheet.create({
	white: {
		backgroundColor: 'white',
	},
});

export const SignInForm = ({ onSubmit }) => {
	return (
		<View style={styles.white}>
			<FormikTextInput name='username' placeholder='Username' testID='usernameField' />
			<FormikTextInput name='password' placeholder='Password' secureTextEntry testID='passwordField' />
			<WideBtn text='Sign In' onPress={onSubmit} />
		</View>
	);
};

const SignIn = () => {
	const [signIn] = useSignIn();
	const history = useHistory();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const { data } = await signIn({ username, password });
			console.log(data);
			history.push('/');
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
