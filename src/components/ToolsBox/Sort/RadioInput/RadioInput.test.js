import React from 'react';
import { shallow } from 'enzyme';
import RadioInput from './RadioInput.component';
import faker from 'faker';

describe('RadioInput', () => {
  it('should contain the required elements', () => {
    const wrapper = shallow(<RadioInput />);

    expect(wrapper.exists('input')).toBe(true);
    expect(wrapper.exists('label')).toBe(true);
  });

  it('should return props of label correctly', () => {
    const label = faker.random.word();
    const id = faker.random.word();
    const wrapper = shallow(<RadioInput label={label} id={id} />);
    const labelEl = wrapper.find('label');

    expect(labelEl.text()).toBe(label);
    expect(labelEl.prop('htmlFor')).toBe(id);
  });

  it('should return props of input correctly', () => {
    const id = faker.random.word();
    const name = faker.random.word();
    const value = faker.random.word();
    const onChange = () => { };
    const checked = faker.datatype.boolean();
    const type = 'radio';
    const wrapper = shallow(<RadioInput id={id} name={name} value={value} onChange={onChange} checked={checked} />);
    const inputEl = wrapper.find('input');

    expect(inputEl.prop('id')).toBe(id);
    expect(inputEl.prop('name')).toBe(name);
    expect(inputEl.prop('value')).toBe(value);
    expect(inputEl.prop('onChange')).toBe(onChange);
    expect(inputEl.prop('checked')).toBe(checked);
    expect(inputEl.prop('type')).toBe(type);
  });
});
