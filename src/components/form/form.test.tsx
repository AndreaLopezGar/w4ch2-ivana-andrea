import { render, screen } from '@testing-library/react';
import { UserForm } from './form';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';

describe('UserForm Component', () => {
  let nameInput: HTMLInputElement;
  let form: HTMLFormElement;
  let submitButton: HTMLButtonElement;
  describe('when submitting the form with valid data', () => {
    beforeEach(() => {
      nameInput = screen.getByLabelText('Username') as HTMLInputElement;
      form = screen.getByText('form');
      submitButton = screen.getByText('Confirm');
      render(<UserForm></UserForm>);
    });

    test('It should render input and button', () => {
      expect(nameInput).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
      expect(form).toBeInTheDocument();
    });

    // test('It shoul render input and button', async () => {
    //   await userEvent.type(nameInput, 'test');
    //   expect(nameInput).toHaveValue('test');
    //   nameInput = screen.getByLabelText('Username') as HTMLInputElement;
    //   // const submitButton = screen.getByText('form');
    //   const submitButton = screen.getByText('Confirm');
    //   await userEvent.click(submitButton);
    // fireEvent.change(nameInput, { target: { value: 'test' } });
    // fireEvent.click(submitButton);
    // fireEvent.submit(form);
  });
});
