import { makeStyles, Theme } from "@material-ui/core";

export const deviceSelectionScreenStyles = makeStyles((theme: Theme) => ({
  background: {
    background: "#333333",
    position: "relative",
  },
  gutterBottom: {
    marginBottom: "1em",
  },
  marginTop: {
    marginTop: "1em",
  },
  deviceButton: {
    width: "100%",
    border: "2px solid #aaa",
    margin: "1em 0",
  },
  localPreviewContainer: {
    paddingRight: "2em",
    [theme.breakpoints.down("sm")]: {
      padding: "0 2.5em",
    },
  },
  bodyContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "auto",
    alignItems: "center",
    marginTop: "5rem",
  },
  contentStyling: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  doctorNameStyling: {
    fontSize: "1.6rem",
    color: "white",
    marginBottom: 0,
    fontWeight: 600,

    "&:hover": {
      color: "white",
    },
  },
  content: {
    fontSize: "2rem",
    color: "white",
    marginBottom: 0,
    width: "25rem",
    textAlign: "center",

    "&:hover": {
      color: "white",
    },
  },
  captionStyling: {
    fontSize: "1rem",
    color: "#fff",
    margin: 0,
    "&:hover": {
      color: "white",
    },
  },
  buttonsContainer: {
    position: "absolute",
    width: "100%",
    bottom: "3rem",
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      position: "static",
      marginBottom: "3rem",
    },
  },
  audioVideoTestBtnContainer: {
    position: "absolute",
    bottom: "3rem",
    right: "3rem",
    zIndex: 1,

    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      marginBottom: "3rem",
      position: "static",
      display: "flex",
      alignSelf: "center",
    },
  },
  joinButtons: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      width: "100%",
      "& button": {
        margin: "0.5em 0",
      },
    },
  },
  mobileButtonBar: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      margin: "1.5em 0 1em",
    },
  },
  buttons: {
    margin: "0 1rem",
    padding: "0.8em 0",
    background: "rgba(0, 0, 0, 0.2)",
    width: "4rem",
    height: "4rem",
    borderRadius: "2rem",
    display: "flex",
    alignItems: "center",
    paddingLeft: "0.7rem",
  },
  testAudiVideoBtn: {
    borderColor: "#fff",
    color: "#fff",
    borderRadius: "1.4rem",
    padding: "0.4rem 2rem",
  },
  disconnectButton: {
    margin: "0 1rem",
    padding: "0.8em 0",
    background: "#da3026",
    width: "4rem",
    height: "4rem",
    borderRadius: "2rem",
    display: "flex",
    alignItems: "center",
    paddingLeft: "0.7rem",
  },
  timer: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginTop: 0,
    color: "white",
    marginBottom: 0,

    "&:hover": {
      color: "white",
    },
  },
  textOrange: {
    color: "orange",

    "&:hover": {
      color: "orange",
    },
  },
  durationInfoContainer: {
    color: "white",
    display: "flex",
    padding: "1rem 2rem",
    background: "rgba(177, 175, 175 ,0.5)",
    flexDirection: "column",
    margin: "1rem",
    borderRadius: "0.4rem",
    position: "absolute",
    left: "1.5rem",
    top: "1.5rem",

    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      marginBottom: "3rem",
      position: "static",
      display: "flex",
      alignSelf: "center",
    },
  },
  textStyling: {
    fontSize: "1.2rem",
    color: "white",
    margin: 0,

    "&:hover": {
      color: "white",
    },
  },
  miniText: {
    fontSize: "0.8rem",
    width: "5rem",
    color: "white",
    textAlign: "left",
    fontWeight: 300,

    "&:hover": {
      color: "white",
    },
  },
  timerMiniText: {
    marginTop: "-1rem",
    display: "flex",
  },
}));
