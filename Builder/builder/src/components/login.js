import React, {Component} from 'react';
import { connect } from 'react-redux';
import TextField from './textField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const mapStateToProps = state => {
    return state
};

class Login extends Component {
    render() {
        return (
            <div className='loginForm'>
                <form className={classes.root} noValidate autoComplete="off">
            <TextField type='name' />
            <TextField type='password' />
            <Button />
</form>
</div>
        )
    }
}

export default connect(mapStateToProps) (Login);
