import React from 'react'
import { mount } from 'enzyme'
import FullLengthHeader from '.';
import HeaderComponent from '../atoms/header';
import TextContent from '../atoms/text-content';

describe('FullLengthHeader Component', () => {
  let headerComponent;
  let textContent;

  beforeEach(() => {
    headerComponent = mount(<HeaderComponent content="Test Header Component" />);
    textContent = mount(<TextContent />);
  })

  it('should render Header component', () => {
    const wrapper = mount(<FullLengthHeader />);
    const element = wrapper.find('ChildComponent');
    const child1 = element.at(0);
    const child2 = element.at(1);

    // expect(element.length).toBe(2);
    expect(child1.name()).toBe('ChildComponent');
  })
})