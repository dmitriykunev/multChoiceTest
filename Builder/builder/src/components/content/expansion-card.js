import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "left"
  },
  column: {
    flexBasis: "33.33%",
    padding: 10
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

export default function DetailedExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Question</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.heading}>Options</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.heading}>Theory</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column}>
            questionesrtgdfgsdtyjhrtjftjgjfgjfgsdfgsdfgsdfgsdfgsdfgsdfgsdfg
            itself
          </div>
          <div className={classes.column}>
            sddsfgsdfgsdfgsdfgdsfgsfgjrtyjfghjrtyjhfcgjhdfgsdfgdsfgdsfgdsfgdsfgfsdf
          </div>
          <div className={classes.column}>
            Thedfgsdfgsdfgsdfgsdfgsfe56y7ertyerthdfgherthdfdfgory should be
            placed here
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" color="default">
            Edit
          </Button>
          <Button size="small" color="primary">
            Save
          </Button>
          <Button size="small" color="secondary">
            Cancel
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}
