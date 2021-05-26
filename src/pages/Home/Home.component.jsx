import React from 'react';
import CardList from '../../components/CardList/CardList.component';

import './Home.style.scss';

const HomePage = () => {
  return (
    <div className="page-container home-page">
      <h1 className="page-title">The fellowship of the tretton37</h1>
      <CardList list={[]} />
    </div>
  );
};

export default HomePage;
