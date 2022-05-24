/* eslint-disable testing-library/no-debugging-utils */
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import App from '../App';

jest.mock('../api/api-utils.js');


it('Login failed', async () => {
    render(<App />);
    const emailInput = screen.getByPlaceholderText('Ingrese su correo electronico')
    const pasInput = screen.getByPlaceholderText('Ingrese su contraseña')
    fireEvent.change(emailInput,{target: {value:'natalyescobar85@gmail.com'}})
    fireEvent.change(pasInput,{target: {value:'123456789'}});
    const btnLogin= screen.getByText('Ingresar')
    fireEvent.click(btnLogin)
    let errElement;
    await waitFor(() => errElement = screen.getByText('Error: Error en autenticación'));
    expect(errElement).toBeInTheDocument();
});

it('Login succesfull', async () => {
    render(<App />);
    const emailInput = screen.getByPlaceholderText('Ingrese su correo electronico')
    const pasInput = screen.getByPlaceholderText('Ingrese su contraseña')
    fireEvent.change(emailInput,{target: {value:'admin@gmail.com'}})
    fireEvent.change(pasInput,{target: {value:'123456789'}});
    const btnLogin= screen.getByText('Ingresar')
    fireEvent.click(btnLogin)
    let logoutElement;
    await waitFor(() => logoutElement = screen.getByText('Salir'));
    expect(logoutElement).toBeInTheDocument();
});