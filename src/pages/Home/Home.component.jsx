import React, {useEffect} from 'react';
import CardList from '../../components/CardList/CardList.component';
import { useApi, APIs } from '../../api';

import './Home.style.scss';

const HomePage = () => {
  const [{data, error, loading}, getUsers] = useApi(APIs.GET_ALL_USERS);

  useEffect(() => {
    getUsers();
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data || loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="page-container home-page">
      <h1 className="page-title">The fellowship of the tretton37</h1>
      <CardList list={data} />
    </div>
  );
};

export default HomePage;
