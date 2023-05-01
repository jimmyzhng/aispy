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
});