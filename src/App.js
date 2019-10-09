import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import theme from './theme';
import { Route, Link, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Image from './Ring.png';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Classes from './pages/Classes';
import Equipment from './pages/Equipment';
import GameMechanics from './pages/GameMechanics';
import Races from './pages/Races';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
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
    height: '85%',
    fontSize: 24,
    marginTop: 32,
    backgroundColor: theme.palette.background.main,
  },
  pageFooter: {
    background: theme.palette.footer.main,
    height: '10%',
  },
});

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.pageHeader}>
          <Typography className={classes.pageTitle}>
            Ring of Knowledge
          </Typography>
          <img className={classes.ringIcon} src={Image} />
        </div>
        <div className={classes.pageContent}>
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
          <Switch>
            <Route path="/classes" component={Classes} />
            <Route path="/equipment" component={Equipment} />
            <Route path="/game-mechanics" component={GameMechanics} />
            <Route path="/races" component={Races} />
          </Switch>
        </div>
        <div className={classes.pageFooter}>
          <Typography>Hello I am a page footer</Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
