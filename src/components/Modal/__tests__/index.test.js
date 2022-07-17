import React from 'react';
import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Grocery aisle',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup)

describe('Modal component renders', () => {
    // baseline test
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal}></Modal>)
    })
    
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(
        <Modal currentPhoto={currentPhoto} onClose={mockToggleModal}></Modal> 
        )
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('click event', () => {
    it('calls onClose handler', () => {
        // render the modal
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        ></Modal>)
        // simulate the click event
        fireEvent.click(getByText('Close this modal'));
        // check for a match
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})