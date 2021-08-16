import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { Formik } from 'formik';
import React from 'react';
import { SignInForm } from '../../components/SignIn';

describe('signin form', () => {
	it('checking sign in component', async () => {
		const onSubmit = jest.fn();
		const initialValues = {
			username: '',
			password: '',
		};
		const { getByTestId } = render(
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
			</Formik>
		);

		fireEvent.changeText(getByTestId('usernameField'), 'kalle');
		fireEvent.changeText(getByTestId('passwordField'), 'password');
		fireEvent.press(getByTestId('submitButton'));

		await waitFor(() => {
			expect(onSubmit).toHaveBeenCalledTimes(1);

			expect(onSubmit.mock.calls[0][0]).toEqual({
				username: 'kalle',
				password: 'password',
			});
		});
	});
});
