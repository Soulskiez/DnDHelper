import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    height: '100vh',
  },
});

function Races() {
  const classes = useStyles();
  return (
    <div>
      <Typography>Races</Typography>
    </div>
  );
}

export default Races;
