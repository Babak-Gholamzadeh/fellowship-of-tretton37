import React, { useEffect, useState } from 'react';
import ToolsBox from '../../components/ToolsBox/ToolsBox.component';
import CardList from '../../components/CardList/CardList.component';
import { useApi, APIs } from '../../api';

import './Home.style.scss';

const HomePage = () => {
  const [{ data, error, loading }, getUsers] = useApi(APIs.GET_ALL_USERS);
  const [list, setList] = useState([]);
  const [sortOption, setSortOption] = useState('name');

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (data) setList([...data]);
  }, [data]);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data || loading) {
    return <div>loading...</div>;
  }

  const sortBy = (fieldName) => {
    const sortedList = [
      ...list.sort((a, b) => (a[fieldName] > b[fieldName] ? 1 : -1)),
    ];
    setList(sortedList);
    setSortOption(fieldName);
  };

  return (
    <div className="page-container home-page">
      <h1 className="page-title">The fellowship of the tretton37</h1>
      <ToolsBox
        sortBy={sortBy}
        sortOption={sortOption}
      />
      <CardList list={list} />
    </div>
  );
};

export default HomePage;
