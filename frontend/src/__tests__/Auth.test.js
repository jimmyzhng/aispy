import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from "@testing-library/react";
import React, { useContext } from 'react';
import axios from "axios";
import Auth from "../components/Auth";
import { AuthProvider, useAuth } from '../context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('axios');

jest.mock('../context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

describe("Auth Component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });


  it('should render login form', async () => {
    const authValue = { isLoggedIn: false, error: false };
    useAuth.mockReturnValue(authValue);

    const { getByRole } = render(<Router><Auth /></Router>);
    expect(getByRole('button', { name: /Login/ })).toBeInTheDocument();
  });

  it('should log in user when submitting login form', async () => {
    const mockedAxios = axios;

    mockedAxios.post.mockResolvedValueOnce({ data: { success: true } });

    const authValue = { isLoggedIn: false, error: false };
    useAuth.mockReturnValue(authValue);

    const { getByPlaceholderText, getByRole } = render(<Router><Auth /></Router>);
    fireEvent.change(getByPlaceholderText("Enter username"), { target: { value: "user1" } });
    fireEvent.change(getByPlaceholderText("Enter password"), { target: { value: "123" } });
    // fireEvent.click(getByRole('button', { name: /Login/ }));

  });
});