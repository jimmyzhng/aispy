import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Auth from '../components/Auth';

describe("Auth", () => {

  test('renders login form and logs in with correct details', () => {
    const { getByText, getByLabelText } = render(
      <BrowserRouter><Auth /></BrowserRouter>
    );

    // Check that the login form is displayed
    const loginTitle = getByText("Not registered yet?");
    expect(loginTitle).toBeInTheDocument();

    // Fill out the form and submit it
    const usernameInput = getByLabelText(/Username/i);
    const passwordInput = getByLabelText(/Password/i);
    const loginButton = getByText(/Login/i);
    fireEvent.change(usernameInput, { target: { value: 'user1' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.click(loginButton);

    // Wait for the login to complete and check that the user is redirected to the home page
    return waitFor(() => {
      expect(window.location.pathname).toEqual('/');
    });
  });


});

