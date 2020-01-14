import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function TextField(type) {
  const classes = useStyles();
  (type === login) ? (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Hello World"
    variant="outlined"
  />
</div></form>) : (<form className={classes.root} noValidate autoComplete="off">
      <div><TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" /></div></form>)