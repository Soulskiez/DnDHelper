import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import theme from '../../theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
  paperContent: {
    margin: 32,
    width: '80%',
    backgroundColor: theme.palette.background.light,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  sidebar: {
    marginTop: 32,
    marginLeft: 32,
    marginBottom: 32,
    backgroundColor: theme.palette.background.light,
  },
  listItem: {
    textAlign: 'center',
    height: 55,
  },
  listItemText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
Classes.propTypes = {
  classesDnd: PropTypes.object,
};
function Classes(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <List disablePadding>
          {props.classesDnd.results.map(classDnd => (
            <ListItem
              className={classes.listItem}
              divider
              button
              key={classDnd.name}
            >
              <ListItemText>
                <Typography className={classes.listItemText}>
                  {classDnd.name}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
      <div className={classes.paperContent}>
        <Typography className={classes.title}>Classes</Typography>
      </div>
    </div>
  );
}

export default Classes;
