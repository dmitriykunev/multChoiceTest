import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: lighten('#4bbb70', 0.5),
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#4bbb70',
    },
  })(LinearProgress);

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

  export default function ProgressBar(value) {
    const classes = useStyles();
      
    return (
      <div className={classes.root}>        
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={value.progress}
        />        
      </div>
    );
  }