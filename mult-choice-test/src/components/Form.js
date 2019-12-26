import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

  const mapStateToProps = state => {
    return state
};

const classes = useStyles();
// const [level, setLevel] = React.useState('Elementary');
const levels = [
    {
      value: 'Elementary',
      label: 'Elementary',
    },
    {
      value: 'Pre-Intermediate',
      label: 'Pre-Intermediate',
    },
    {
      value: 'Intermediate',
      label: 'Intermediate',
    },
    {
      value: 'Upper-Intermediate',
      label: 'Upper-Intermediate',
    },
  ];


  class Form extends Component {
    

    // handleSelect = event => {
    //     setLevel(event.target.value);
    //   };

    render () {
        return (
            <form className={classes.root} noValidate autoComplete='off'>
                <TextField id="outlined-basic" label="Имя" variant="outlined" />
                <TextField id="outlined-basic" label="Телефон" variant="outlined" />
                <TextField id="standard-select-currency" select label="Уровень" value="" onChange={this.handleSelect} helperText="Выберите уровень сложности теста">
                {levels.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
              ))}
                </TextField>
            </form>
        )
    }
  }

  export default connect(mapStateToProps) (Form);