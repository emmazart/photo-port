import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// configure testing environment
afterEach(cleanup); // after each test, get rid of any leftover memory data

describe('About component', () => {
    // baseline test verifies component is rendering
    it('renders', () => {
        render(<About />);
    });

    // test case
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />); // asFragment function returns snapshot of component
        expect(asFragment()).toMatchSnapshot();
    })

})


// When changes are made to a component's element, 
// such as a change in text content, button label, or attribute, 
// it will cause the stored snapshot to become stale. 
// A new snapshot can be written at the command line 
// that contains the instance of the test runner 
// by typing u to update, or rewrite, a new snapshot.