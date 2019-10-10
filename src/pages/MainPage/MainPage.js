import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Route, Link, Switch } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RingIcon from '../../components/Icons/Ring.png';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Classes from '../../components/Classes';
import Equipment from '../../components/Equipment';
import GameMechanics from '../../components/GameMechanics';
import Races from '../../components/Races';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.light,
    height: '100vh',
  },
  pageHeader: {
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 32,
  },
  ringIcon: {
    marginLeft: 32,
    width: 48,
    height: 48,
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 24,
    backgroundColor: theme.palette.background.main,
  },
  pageFooter: {
    background: theme.palette.footer.main,
    height: '10%',
  },
}));

function MainPage(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <div className={classes.pageHeader}>
        <Typography className={classes.pageTitle}>Ring of Knowledge</Typography>
        <img className={classes.ringIcon} src={RingIcon} />
      </div>
      <div className={classes.pageContent}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            centered
          >
            <Tab component={Link} to="/classes" label="Classes" />
            <Tab component={Link} to="/equipment" label="Equipment" />
            <Tab component={Link} to="/game-mechanics" label="Game Mechanics" />
            <Tab component={Link} to="/races" label="Races" />
          </Tabs>
        </AppBar>
        <Switch>
          <Route path="/classes">
            <Classes classesDnd={props.classesDnd} />
          </Route>
          <Route path="/equipment" component={Equipment} />
          <Route path="/game-mechanics" component={GameMechanics} />
          <Route path="/races" component={Races} />
        </Switch>
      </div>
      <div className={classes.pageFooter}>
        <Typography>Hello I am a page footer</Typography>
      </div>
    </div>
  );
}

export default MainPage;
