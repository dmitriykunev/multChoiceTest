import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from './Button';
//import DataTransaction from './dataTransaction';
import * as Cards from './cards';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      }},
  }));

export default function Form(props) {
  const levels = [
    {
      value: 'Elementar',
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
  const classes = useStyles();
  //  const [level, setLevel] = React.useState('Elementary');
     const handleSelect = event => {
       
       const payload = event.target.value;
       props.dispatch({
         type: 'FORM_LEVEL_CHANGE',
         payload
       });
       };

       const handleName = event => {
         const payload = event.target.value;
         props.dispatch({
           type: 'FORM_NAME_CHANGE',
           payload
         });
       };

       const handlePhone = event => {
         const payload = event.target.value;
         props.dispatch({
           type: 'FORM_PHONE_CHANGE',
           payload
         });
       };

       const handleSubmit = (event) => {
         event.preventDefault();
        // const payload = {
        // userName: props.userName,
        //   phone: props.phone,
        //   level: props.level
        //}
        // const {data} = await DataTransaction.start(payload);
         const payload = Cards.cards;
         props.dispatch({
           type: 'POPULATE_TEST',
           payload
         });
         const token = Math.random().toString(36).substr(2, 25);
         props.dispatch({
           type: 'GENERATE_TOKEN',
           token
         });
         props.history.push('/test');
       }

        return (
            <form className={classes.root} noValidate autoComplete='off'>
                <TextField id="outlined-basic-name" label="Имя" variant="outlined" onBlur={handleName} />
                <TextField id="outlined-basic-phone" label="Телефон" variant="outlined" onBlur={handlePhone} /><br />
                
                
                <TextField id="standard-select-currency" select label={props.level} value="" onChange={handleSelect} helperText="Выберите уровень сложности">
                {levels.map(option => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
              ))}
                </TextField>
                <Button onClick={handleSubmit} />
            </form>
        )
  }