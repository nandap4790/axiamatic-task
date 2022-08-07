import React from 'react'
import { render, screen } from '@testing-library/react';
import TextContent from '.';

describe('Text Content Component', () => {
  it("renders null when no props are passed", () => {
    render(<TextContent />);
    const emptyDivElement = screen.queryByTestId('div-element');
    const emptySpanElement = screen.queryByTestId('span-element');
    const emptyLinkElement = screen.queryByTestId('link-element');

    expect(emptyDivElement).toBeNull();
    expect(emptySpanElement).toBeNull();
    expect(emptyLinkElement).toBeNull();
  })

  it("renders null when type is not link or div or span", () => {
    render(<TextContent type="p"/>);
    const emptyDivElement = screen.queryByTestId('div-element');
    const emptySpanElement = screen.queryByTestId('span-element');
    const emptyLinkElement = screen.queryByTestId('link-element');

    expect(emptyDivElement).toBeNull();
    expect(emptySpanElement).toBeNull();
    expect(emptyLinkElement).toBeNull();
  })

  it("renders empty anchor when type is link", () => {
    render(<TextContent type="link"/>);
    const linkElement = screen.queryByTestId('link-element');

    expect(linkElement).toBeEmptyDOMElement();
  })

  it("renders anchor when type is link and text is passed with default classnames", () => {
    render(<TextContent type="link" content="anchor text" />);
    const linkElement = screen.queryByTestId('link-element');

    expect(linkElement).toContainHTML('<a href="#" data-testid="link-element" class="link-text  ">anchor text</a>');
  })

  it("renders anchor when type is link and text is passed with custom classnames and subtypes", () => {
    render(<TextContent type="link" content="anchor text" customStyle="custom-class" subtype="with-background" />);
    const linkElement = screen.queryByTestId('link-element');

    expect(linkElement).toContainHTML('<a href="#" data-testid="link-element" class="link-text custom-class with-background">anchor text</a>');
  })

  it("renders div when type is link and text is passed with custom classnames and subtypes", () => {
    render(<TextContent type="div" content="div text" customStyle="custom-class" subtype="with-background" />);
    const linkElement = screen.queryByTestId('div-element');

    expect(linkElement).toContainHTML('<div data-testid="div-element" class="custom-class with-background">div text</div>');
  })

  it("renders span when type is link and text is passed with custom classnames and subtypes", () => {
    render(<TextContent type="span" content="span text" customStyle="custom-class" subtype="with-background" />);
    const linkElement = screen.queryByTestId('span-element');

    expect(linkElement).toContainHTML('<span data-testid="span-element" class="custom-class with-background">span text</span>');
  })
})