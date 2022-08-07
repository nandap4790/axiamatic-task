import React from 'react'
import HeaderComponent from '.';
import { render, screen } from '@testing-library/react';

describe('Header Component', () => {
  it("should render h1 with empty element when no props are passed", () => {
    render(<HeaderComponent />);
    const emptyHeaderElement = screen.getByTestId('header');
    expect(emptyHeaderElement).toBeEmptyDOMElement();
  });

  it("should render h1 with only content passed", () => {
    render(<HeaderComponent content="Just the content passed"/>);
    const contentElement = screen.getByText(/just the content passed/i);
    expect(contentElement).toBeInTheDocument();
  })

  it("should render the right tag based on the level passed with content", () => {
    render(<HeaderComponent content="Just the content passed" level={2} />);
    const contentElement = screen.getByText(/just the content passed/i);
    const headerElement = screen.getByTestId('header');

    expect(headerElement).toContainHTML('<h2 data-testid="header">Just the content passed</h2>');
    expect(contentElement).toBeInTheDocument();
  })
})