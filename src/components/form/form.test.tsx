// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { UserForm } from './form';

// test('Prueba de formulario', () => {
//   const { getByLabelText, getByText } = render(<UserForm />);

//   const nameInput = getByLabelText('Nombre:');
//   const emailInput = getByLabelText('Email');
//   const ageInput = getByLabelText('Edad:');
//   const submitButton = getByText('Enviar');

//   fireEvent.change(nameInput, { target: { value: 'Ejemplo' } });
//   fireEvent.change(emailInput, { target: { value: 'ejemplo@example.com' } });
//   fireEvent.change(ageInput, { target: { value: '30' } });

//   fireEvent.click(submitButton);
//   const successMessage = getByText('Formulario enviado con éxito');
//   expect(successMessage).toBeInTheDocument();
// });
