import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AuthContext from "../../store/auth-context";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
