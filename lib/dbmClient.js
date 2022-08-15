import DbmClient from '@clients/dbm';

const dbmClient = DbmClient('https://api2.diamondsbyme.com/1.0', {
  credentials: {
    username: process.env.DBM_API_USERNAME,
    password: process.env.DBM_API_PASSWORD,
  },
});

export default dbmClient;
