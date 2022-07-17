import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..';

afterEach(cleanup)

describe('Contact form is rendering', () => {
    it('renders', () => {
        render(<ContactForm></ContactForm>);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm></ContactForm>)
        expect(asFragment()).toMatchSnapshot()
    });
});

describe('h1 title matches category', () => {
    it('renders', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })
})

describe('button text matches submit', () => {
    it('renders', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>)
        expect(getByTestId('button')).toHaveTextContent('Submit')
    })
})

