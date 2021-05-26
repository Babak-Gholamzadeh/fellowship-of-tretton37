import React, { useEffect, useState } from 'react';
import ToolsBox from '../../components/ToolsBox/ToolsBox.component';
import CardList from '../../components/CardList/CardList.component';
import Spinning from '../../components/Spinning/Spinning.component';
import { useApi, APIs } from '../../api';

import './Home.style.scss';

const HomePage = () => {
  const [{data, error, loading}, getUsers] = useApi(APIs.GET_ALL_USERS);
  const [list, setList] = useState([]);
  const [sortOption, setSortOption] = useState('name');
  const [filterOptions, setFilterOptions] = useState({
    name: '',
    office: '',
    contact: '',
  });

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
    return <Spinning />;
  }

  const sortBy = (fieldName) => {
    const sortedList = [
      ...list.sort((a, b) => (a[fieldName] > b[fieldName] ? 1 : -1)),
    ];
    setList(sortedList);
    setSortOption(fieldName);
  };

  const filterBy = ({ name, office, contact }) => {
    const regName = new RegExp(name, 'i');
    const regOffice = new RegExp(office, 'i');
    const regContact = new RegExp(contact, 'i');
    const filteredList = data.filter((item) => {
      if (name && !regName.test(item.name)) return false;
      if (office && (!item.office || !regOffice.test(item.office)))
        return false;
      if (
        contact &&
        (!item.gitHub || !regContact.test(item.gitHub)) &&
        (!item.twitter || !regContact.test(item.twitter))
      )
        return false;
      return true;
    });
    setList(filteredList);
    setFilterOptions({ name, office, contact });
  };

  return (
    <div className="page-container home-page">
      <h1 className="page-title">The fellowship of the tretton37</h1>
      <ToolsBox
        sortBy={sortBy}
        sortOption={sortOption}
        filterBy={filterBy}
        filterOptions={filterOptions}
      />
      <CardList list={list} />
    </div>
  );
};

export default HomePage;
