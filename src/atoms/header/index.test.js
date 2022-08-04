import React from 'react'
import { mount } from 'enzyme'
import HeaderComponent from './index';

describe('Header Component', () => {
  it('should render level 1 header with no content when no props are passed', () => {
    const wrapper = mount(<HeaderComponent />);
    expect(wrapper.html()).toEqual('<h1></h1>');
  })

  it('should render the content passed as a prop', () => {
    const wrapper = mount(<HeaderComponent content="Test Header"/>);
    expect(wrapper.html()).toEqual('<h1>Test Header</h1>');
  })

  it('should render the tag passed as level', () => {
    const wrapper = mount(<HeaderComponent content="Test Header" level={2} />);
    expect(wrapper.html()).toEqual('<h2>Test Header</h2>');
  })
})