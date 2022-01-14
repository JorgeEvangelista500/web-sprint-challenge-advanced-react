import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstname = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstname, 'Elvis');

    const lastname = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastname, 'Evan');

    const address = screen.getByLabelText(/Address:/i);
    userEvent.type(address, 'jorge@jorge');

    const city = screen.getByLabelText(/City:/i);
    userEvent.type(city, 'somewhere');

    const state = screen.getByLabelText(/State:/i);
    userEvent.type(state, 'LS');

    const zip = screen.getByLabelText(/Zip:/i)
    userEvent.type(zip, '09990');

    const button = screen.getByRole('button');
    userEvent.click(button);

    const success = screen.getByText('You have ordered some plants! Woo-hoo!');
    const shipped = screen.getByText('Your new green friends will be shipped to:');
    const output1 = screen.getByText('Elvis Evan')
    const output2 = screen.getByText('jorge@jorge');
    const output3 = screen.getByText('somewhere, LS 09990');
    

    expect(success).toBeInTheDocument();
    expect(shipped).toBeInTheDocument();
    expect(output1).toBeInTheDocument();
    expect(output2).toBeInTheDocument();
    expect(output3).toBeInTheDocument();
    
});
