import React from 'react';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]

afterEach(cleanup)

describe('PhotoList is rendering', () => {
    it('renders', () => {
        render(<PhotoList category={categories.name}></PhotoList>)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<PhotoList category={categories.name}></PhotoList>) 
        expect(asFragment()).toMatchSnapshot()
    })
})

// this is the way the module wrote it
// describe('PhotoList is rendering', () => {
//     it('renders', () => {
//       render(<PhotoList />);
//     });
  
//     it('renders', () => {
//       const { asFragment } = render(<PhotoList />)
//       expect(asFragment()).toMatchSnapshot()
//     });
//   });