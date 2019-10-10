import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
  },
}));

function Equipment() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.root}>Equipment</Typography>
    </div>
  );
}

export default Equipment;
