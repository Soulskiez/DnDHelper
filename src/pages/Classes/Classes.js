import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    height: '100vh',
  },
});
Classes.propTypes = {
  classesDnd: PropTypes.object,
};
function Classes(props) {
  const classes = useStyles();
  console.log(props.classesDnd);
  return (
    <div>
      <Typography>Classes</Typography>
      <Typography>{props.classesDnd.results[1].name}</Typography>
    </div>
  );
}

export default Classes;
