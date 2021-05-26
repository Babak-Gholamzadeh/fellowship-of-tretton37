import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList.component';
import CardItem from './CardItem/CardItem.component';
import faker from 'faker';

describe('CardList', () => {
  it('should return a message on empty list', () => {
    const wrapper = shallow(<CardList />);
    const msg = wrapper.find('.card-list .no-item').text();

    expect(msg).toBe('There is nothing here!');
  });

  it('should contains enough children', () => {
    const count = faker.datatype.number();
    const list = Array.from({length: count}, () => ({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      office: faker.address.country(),
      imagePortraitUrl: faker.image.imageUrl(),
      gitHub: faker.internet.userName,
      twitter: faker.internet.userName,
      linkedIn: `/in/${faker.internet.userName}`,
    }));
    const wrapper = shallow(<CardList list={list} />);
    const children = wrapper.find('.card-list').children();

    expect(children).toHaveLength(count);
  });

  it('should contains CardItem', () => {
    const count = faker.datatype.number();
    const list = Array.from({length: count}, () => ({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      office: faker.address.country(),
      imagePortraitUrl: faker.image.imageUrl(),
      gitHub: faker.internet.userName,
      twitter: faker.internet.userName,
      linkedIn: `/in/${faker.internet.userName}`,
    }));
    const wrapper = shallow(<CardList list={list} />);
    const cardItem = wrapper.find(CardItem);

    expect(cardItem.exists()).toBe(true);
  });
});
