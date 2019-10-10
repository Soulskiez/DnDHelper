import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    height: '100vh',
  },
});

function GameMechanics() {
  const classes = useStyles();
  return (
    <div>
      <Typography>GameMechanics</Typography>
    </div>
  );
}

export default GameMechanics;
