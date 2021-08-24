import { Formik } from 'formik';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import useCreateReview from '../hooks/useCreateReview';
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
	ownerName: yup.string().required('Repository owner name is required'),
	repositoryName: yup.string().required('Repository name is required'),
	rating: yup.number().required('Rating is required').min(0, 'Rating must not be less than 0').max(100, 'Rating must not be more than 100'),
	text: yup.string().optional(),
});

const initialValues = {
	ownerName: '',
	repositoryName: '',
	rating: '',
	text: '',
};

export const ReviewForm = ({ onSubmit, error }) => {
	return (
		<View style={styles.white}>
			<FormikTextInput name='ownerName' placeholder='GitHub repository owner name' testID='usernameField' />
			<FormikTextInput name='repositoryName' placeholder='Repository Name' testID='repoField' />
			<FormikTextInput name='rating' keyboardType='numeric' placeholder='Repository Rating between 0 and 100' />
			<FormikTextInput name='text' multiline placeholder='Review' />
			<WideBtn text='Create a Review' onPress={onSubmit} />
			{error && <Text style={styles.errorText}>Repository already reviewed</Text>}
		</View>
	);
};

const Review = () => {
	const [createReview] = useCreateReview();
	const history = useHistory();
	const [error, setError] = useState(false);

	const onSubmit = async (values) => {
		const { ownerName, repositoryName, rating, text } = values;
		try {
			const data = await createReview({ ownerName, repositoryName, rating, text });
			// console.log('data' + data);
			if (data.hasOwnProperty('Error')) {
				setError(data.Error);
			}
			history.push(`/repository/${data.id}`);
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

export default Review;
