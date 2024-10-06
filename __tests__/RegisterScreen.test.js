import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RegisterScreen from './../src/screens/RegisterScreen';


jest.mock('react-native-snackbar', () => ({
    show: jest.fn(),
}));

describe('RegisterScreen', () => {


    it('renders successfully with valid input', () => {
        const { getByPlaceholderText, getByTestId } = render(<RegisterScreen />);

        const fullNameInput = getByPlaceholderText('Full Name');
        fireEvent.changeText(fullNameInput, 'John Doe');

        const emailInput = getByPlaceholderText('Email address');
        fireEvent.changeText(emailInput, 'johndoe@example.com');

        const passwordInput = getByPlaceholderText('Password');
        fireEvent.changeText(passwordInput, 'StrongPassword123');

        expect(getByText('Successfully Submitted!')).toBeInTheDocument();


    });

    it('displays error message for empty name', () => {
        const { getByPlaceholderText, getByTestId } = render(<RegisterScreen />);

        const signUpButton = getByTestId('signUpButton');
        fireEvent.press(signUpButton);

        // Assert that the error message is displayed
        expect(getByText('Please Enter Name')).toBeInTheDocument();
    });

    it('displays error message for name exceeding 50 characters', () => {
        const { getByPlaceholderText, getByTestId } = render(<RegisterScreen />);

        const fullNameInput = getByPlaceholderText('Full Name');
        fireEvent.changeText(fullNameInput, 'A very long name that exceeds 50 characters');

        const signUpButton = getByTestId('signUpButton');
        fireEvent.press(signUpButton);

        // Assert that the error message is displayed
        expect(getByText('Name cannot be longer than 50 characters')).toBeInTheDocument();
    });

    it('displays error message for empty password', () => {
        const { getByPlaceholderText, getByTestId } = render(<RegisterScreen />);

        const signUpButton = getByTestId('signUpButton');
        fireEvent.press(signUpButton);

        // Assert that the error message is displayed
        expect(getByText('Password is required')).toBeInTheDocument();
    });


    it('displays error message for invalid email format', () => {
        const { getByPlaceholderText, getByTestId } = render(<RegisterScreen />);

        const emailInput = getByPlaceholderText('Email address');
        fireEvent.changeText(emailInput, 'invalid_email');

        const signUpButton = getByTestId('signUpButton');
        fireEvent.press(signUpButton);

        // Assert that the error message is displayed
        expect(getByText('Invalid email format')).toBeInTheDocument();
    });


    it('displays error message for short password', () => {
        const { getByPlaceholderText, getByTestId } = render(<RegisterScreen />);

        const passwordInput = getByPlaceholderText('Password');
        fireEvent.changeText(passwordInput, 'short');

        const signUpButton = getByTestId('signUpButton');
        fireEvent.press(signUpButton);

        // Assert that the error message is displayed
        expect(getByText('Password must be at least 8 characters long and contain only letters and numbers')).toBeInTheDocument();
    });

    it('displays error message for invalid password characters', () => {
        const { getByPlaceholderText, getByTestId } = render(<RegisterScreen />);

        const passwordInput = getByPlaceholderText('Password');
        fireEvent.changeText(passwordInput, 'invalid@password');

        const signUpButton = getByTestId('signUpButton');
        fireEvent.press(signUpButton);

        // Assert that the error message is displayed
        expect(getByText('Password must be at least 8 characters long and contain only letters and numbers')).toBeInTheDocument();
    });


});


