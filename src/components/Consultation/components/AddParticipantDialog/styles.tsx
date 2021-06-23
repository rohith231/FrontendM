import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "600px",
    minHeight: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "calc(100vw - 32px)",
    },
    "& .inputSelect": {
      width: "calc(100% - 35px)",
    },
  },
  header: {
    background: "#263238",
    color: "#fff",
  },
  closeIcon: {
    color: "#fff",
    position: "absolute",
    right: "1.5rem",
    top: "1.25rem",
    cursor: "pointer",
  },
  form: {
    width: "100%",
    marginTop: "1rem",
  },
  textInput: {
    width: "100%",
    color: "#777777",
    marginBottom: "2rem",
  },
  label: {
    fontSize: "14px",
    paddingBottom: "0.5rem",
    width: "100%",
  },
  redText: {
    color: "red",
  },
  button: {
    background: "#5571C6",
    margin: "auto",
    width: "8rem",
    color: "#fff",
    marginBottom: "2rem",

    "&:hover": {
      background: "#5571C6",
    },
  },
  paper: {
    [theme.breakpoints.down("xs")]: {
      margin: "16px",
    },
  },
}));
