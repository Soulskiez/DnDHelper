import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
}));

function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>Landing Page</Typography>
    </div>
  );
}

export default LandingPage;
