import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Send from "@material-ui/icons/Send";
import AccountCircle from "@material-ui/icons/AccountCircle";
import DataTransaction from "./dataTransaction";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 200
  },
  card: {
    minWidth: 350
  },
  title: {
    fontSize: 26,
    marginBottom: 10
  },
  pos: {
    marginBottom: 12
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Form(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    login: "",
    password: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleLoginChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  //   const handleSubmit = async() => {
  const handleSubmit = async () => {
    const payload = {
      username: values.login,
      password: values.password
    };
    console.log(payload);
    const { data } = await DataTransaction.login(payload);
    console.log(data);
    if (data) {
      props.dispatch({
        type: "LOGIN_SUCCESS",
        data
      });
      localStorage.setItem("token", data[0].token);
      localStorage.setItem("username", data[0].username);
      props.history.push("/");
    } else {
      props.history.push("/whoTheFuckAreYou");
    }
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            variant="h2"
            align="left"
          >
            Представьтесь
          </Typography>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <TextField
              required
              id="outlined-secondary"
              label="Идентификатор"
              variant="outlined"
              color="primary"
              onChange={handleLoginChange("login")}
              value={values.login}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
            />
          </FormControl>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Пароль
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            variant="contained"
            onClick={() => handleSubmit()}
            color="primary"
            endIcon={<Send />}
            className={classes.button}
          >
            Войти
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
