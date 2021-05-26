import React from 'react';
import CardItem from './CardItem/CardItem.component';

import './CardList.style.scss';

const CardList = ({list}) => {
  const noItem = <div className="no-item">There is nothing here!</div>;
  const items = list && list.map(({email, ...rest}) => <CardItem {...rest} key={email} />);
  return (
    <div className="card-list">
      {list?.length ? items : noItem}
    </div>
  );
};

export default CardList;
