import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput.component';
import faker from 'faker';

describe('TextInput', () => {
  it('should return the required elements', () => {
    const wrapper = shallow(<TextInput />);

    expect(wrapper.exists('label')).toBe(true);
    expect(wrapper.exists('input')).toBe(true);
  });

  it('should return props of label correctly', () => {
    const label = faker.random.word();
    const id = faker.random.word();
    const wrapper = shallow(<TextInput label={label} id={id} />);
    const labelEl = wrapper.find('label');

    expect(labelEl.text()).toBe(label);
    expect(labelEl.prop('htmlFor')).toBe(id);
  });

  it('should return props of input correctly', () => {
    const id = faker.random.word();
    const name = faker.random.word();
    const value = faker.random.word();
    const onChange = () => { };
    const type = 'text';
    const wrapper = shallow(<TextInput id={id} name={name} value={value} onChange={onChange} />);
    const inputEl = wrapper.find('input');

    expect(inputEl.prop('id')).toBe(id);
    expect(inputEl.prop('name')).toBe(name);
    expect(inputEl.prop('value')).toBe(value);
    expect(inputEl.prop('onChange')).toBe(onChange);
    expect(inputEl.prop('type')).toBe(type);
  });
});
