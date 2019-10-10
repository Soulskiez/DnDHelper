import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { isNormal, isLoading } from 'resift';

import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
    padding: 24,
  },
  loader: {
    margin: 32,
    padding: 24,
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
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
  classInfo: PropTypes.object,
  classStatus: PropTypes.number,
  setClassIndex: PropTypes.func,
};
function Classes(props) {
  const classes = useStyles();
  const { classInfo, classStatus } = props;
  const [selectedClassIndex, setSelectedClassIndex] = useState(0);

  const handleSidebarClick = index => {
    setSelectedClassIndex(index);
    props.setClassIndex(index + 1);
  };

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <List disablePadding>
          {props.classesDnd.results.map((classDnd, index) => (
            <ListItem
              className={classes.listItem}
              divider
              button
              key={classDnd.name}
              onClick={() => handleSidebarClick(index)}
              selected={selectedClassIndex === index}
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
      {!isNormal(classStatus) && (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )}
      {isNormal(classStatus) && (
        <div className={classes.paperContent}>
          <Typography className={classes.title}>
            Class: {classInfo.name}
          </Typography>
        </div>
      )}
    </div>
  );
}

export default Classes;
