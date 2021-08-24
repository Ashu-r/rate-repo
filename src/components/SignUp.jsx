import { Formik } from 'formik';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import useSignUp from '../hooks/useSignUp';
import FormikTextInput from './FormikTextInput';
import WideBtn from './WideBtn';
import Text from './Text';
import * as yup from 'yup';

const styles = StyleSheet.create({
	white: {
		backgroundColor: 'white',
	},
	errorText: {
		marginTop: 1,
		marginBottom: 2,
		color: '#d73a4a',
		margin: 10,
	},
});

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.required('Username is required')
		.min(1, 'Username should be longer than 0 characters')
		.max(30, 'Username should be less than 30 characters'),
	password: yup
		.string()
		.required('Password is required')
		.min(5, 'Password should be longer than 5 characters')
		.max(50, 'Password should be less than 50 characters'),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Password do not match')
		.required('Password confirmation is required'),
});

const initialValues = {
	username: '',
	password: '',
	passwordConfirm: '',
};

export const ReviewForm = ({ onSubmit, error }) => {
	return (
		<View style={styles.white}>
			<FormikTextInput name='username' placeholder='Username' />
			<FormikTextInput secureTextEntry name='password' placeholder='Password' />
			<FormikTextInput secureTextEntry name='passwordConfirm' placeholder='Confirm Password' />
			<WideBtn text='Create an user' onPress={onSubmit} />
			{error && <Text style={styles.errorText}>Username already exists</Text>}
		</View>
	);
};

const SignUp = () => {
	const [signUp] = useSignUp();
	const history = useHistory();
	const [error, setError] = useState(false);

	const onSubmit = async (values) => {
		const { username, password } = values;
		try {
			const data = await signUp({ username, password });
			history.push(`/`);
		} catch (e) {
			// console.log('error' + e);
			setError(true);
		}
	};
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			{({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} error={error} />}
		</Formik>
	);
};

export default SignUp;
