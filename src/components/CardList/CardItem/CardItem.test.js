import React from 'react';
import { shallow } from 'enzyme';
import CardItem from './CardItem.component';
import faker from 'faker';

describe('CardItem', () => {
  it('should contain required elements', () => {
    const wrapper = shallow(<CardItem />);

    expect(wrapper.exists('.img-portrait img')).toBe(true);
    expect(wrapper.exists('.info .name')).toBe(true);
    expect(wrapper.exists('.info .office')).toBe(true);
    expect(wrapper.exists('.contact')).toBe(true);
  });

  it('should return the name and the image url from img element', () => {
    const imagePortraitUrl = faker.image.imageUrl();
    const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const wrapper = shallow(<CardItem imagePortraitUrl={imagePortraitUrl} name={name} />);
    const imgEl = wrapper.find('.img-portrait img');

    expect(imgEl.prop('alt')).toBe(`portrait of ${name}`);
    expect(imgEl.prop('src')).toBe(imagePortraitUrl);
  });

  it('should return the name and the office from the info element', () => {
    const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const office = faker.address.country();
    const wrapper = shallow(<CardItem name={name} office={office}/>);
    const nameEl = wrapper.find('.info .name');
    const officeEl = wrapper.find('.info .office');

    expect(nameEl.text()).toBe(name);
    expect(nameEl.prop('title')).toBe(name);
    expect(officeEl.text()).toBe(`Office: ${office}`);
    expect(officeEl.prop('title')).toBe(office);
  });

  it('should return the complete url of github, twitter, linkedin from the contact element', () => {
    const gitHub = faker.internet.userName;
    const twitter = faker.internet.userName;
    const linkedIn = `/in/${faker.internet.userName}`;
    const wrapper = shallow(<CardItem gitHub={gitHub} twitter={twitter} linkedIn={linkedIn}/>);
    const gitHubEl = wrapper.find('.contact a.github-link');
    const twitterEl = wrapper.find('.contact a.twitter-link');
    const linkedInEl = wrapper.find('.contact a.linkedin-link');

    expect(gitHubEl.prop('href')).toBe(`https://github.com/${gitHub}`);
    expect(gitHubEl.prop('target')).toBe('_blank');
    expect(gitHubEl.prop('rel')).toBe('noreferrer');
    expect(twitterEl.prop('href')).toBe(`https://twitter.com/${twitter}`);
    expect(twitterEl.prop('target')).toBe('_blank');
    expect(twitterEl.prop('rel')).toBe('noreferrer');
    expect(linkedInEl.prop('href')).toBe(`https://www.linkedin.com${linkedIn}`);
    expect(linkedInEl.prop('target')).toBe('_blank');
    expect(linkedInEl.prop('rel')).toBe('noreferrer');
  });
});
