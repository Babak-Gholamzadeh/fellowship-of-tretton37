const API_TOKEN = process.env.REACT_APP_API_TOKEN;

const APIs = {
  GET_ALL_USERS() {
    return {
      url: 'https://api.1337co.de/v3/employees',
      method: 'GET',
      headers: {
        Authorization: API_TOKEN,
      },
    };
  },
};

export default APIs;
