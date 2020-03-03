import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  button: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const defaultLevel = props.level;
  const [level, setLevel] = React.useState(defaultLevel);

  //   const inputLabel = React.useRef(null);
  //   const [labelWidth, setLabelWidth] = React.useState(0);
  //   React.useEffect(() => {
  //     setLabelWidth(inputLabel.current.offsetWidth);
  //   }, []);

  const handleChange = event => {
    setLevel(event.target.value);
  };

  const handleSubmit = () => {
    console.log(props);
    props.dispatch({
      type: "LEVEL_CHANGE",
      level
    });
  };

  return (
    <div className="select">
      <FormControl className={classes.formControl}>
        <InputLabel id="select">Выберите уровень</InputLabel>
        <Select
          labelId="select"
          id="select"
          value={level}
          onChange={handleChange}
          displayEmpty={false}
        >
          <MenuItem value={"Elementary"}>Elementary</MenuItem>
          <MenuItem value={"Pre-Intermediate"}>Pre-Intermediate</MenuItem>
          <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
          <MenuItem value={"Upper-Intermediate"}>Upper-Intermediate</MenuItem>
          <MenuItem value={"Advanced"}>Advanced</MenuItem>
        </Select>
      </FormControl>
      <Button
        size="small"
        variant="contained"
        onClick={() => handleSubmit()}
        color="primary"
        endIcon={<SearchIcon />}
        className={classes.button}
      >
        Фильтровать
      </Button>
    </div>
  );
}
