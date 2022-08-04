import React from 'react'
import { mount } from 'enzyme'
import TextContent from './index';

describe('TextContent Component', () => {
  it('should render null when no props are passed', () => {
    const wrapper = mount(<TextContent />);
    expect(wrapper.html()).toBeNull();
  })

  it('should render null when only type is passed', () => {
    const wrapper = mount(<TextContent type="link"/>);
    expect(wrapper.html()).toBeNull();
  })

  it('should render null with only content', () => {
    const wrapper = mount(<TextContent content="Just a normal text"/>);
    expect(wrapper.html()).toBeNull();
  })

  it('should render the anchor tag with content', () => {
    const wrapper = mount(<TextContent type="link" content="Just a normal text"/>);
    expect(wrapper.html()).toEqual('<a>Just a normal text</a>');
  })

  it('should render the div with content as text', () => {
    const wrapper = mount(<TextContent type="div" content="Just a normal text"/>);
    expect(wrapper.html()).toEqual('<div>Just a normal text</div>');
  })

  it('should render null when random text is passed', () => {
    const wrapper = mount(<TextContent type="link-test" content="Just a normal text"/>);
    expect(wrapper.html()).toBeNull();
  })
})