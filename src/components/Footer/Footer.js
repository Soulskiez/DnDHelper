import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.footer.main,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  aTag: {
    color: 'white',
    textDecoration: 'none',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.text}>Powered by</Typography>
      <Typography className={classes.text}>
        <a className={classes.aTag} href="https://material-ui.com">
          Material - UI https://material-ui.com
        </a>
      </Typography>
      <Typography className={classes.text}>
        <a className={classes.aTag} href="https://resift.org">
          Resift resift.org
        </a>
      </Typography>
    </div>
  );
}

export default Footer;
