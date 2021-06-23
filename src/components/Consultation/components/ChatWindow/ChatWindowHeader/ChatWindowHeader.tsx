import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import CloseIcon from "../../../icons/CloseIcon";

import useChatContext from "../../../hooks/useChatContext/useChatContext";
import logo from "../../../assets/user.svg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Step,
  Stepper,
  StepLabel,
  StepContent,
  Paper,
  Button,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import historylogo from "../../../assets/icon_file.png";
const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      // height: '100px',
      background: "#F4F4F6",
      // borderBottom: '1px solid #E4E7E9',
      display: "flex",
      justifyContent: "center",
      // alignItems: 'center',
      padding: "0.5em",
      flexDirection: "column",
    },
    text: {
      fontWeight: "bold",
      marginRight: 2,
    },
    closeChatWindow: {
      cursor: "pointer",
      display: "flex",
      background: "transparent",
      border: "0",
      padding: "0.4em",
    },
    profile: {
      display: "flex",
      flexDirection: "row",
    },
    imag: {
      width: 60,
      height: 60,
    },
    imag1: {
      width: 20,
      height: 20,
      marginRight: "0.2em",
    },
    root: {
      // width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      // flexBasis: '33.33%',
      flexShrink: 0,
      color: "white",
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    topH: {
      backgroundColor: "#5571C6",
    },
    statusBar: {
      width: "200px",
      display: "inline-table",
      verticalAlign: "top",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    scrollableView: {
      overflowY: "scroll",
      // border:'1px solid red',
      // width:'500px',
      float: "left",
      height: "20.5em",
      position: "relative",
      marginTop: "1em",
    },
    mainProfileContiner: {
      justifyContent: "space-between",
      display: "flex",
      marginTop: "2rem",
      marginBottom: "1rem",
    },
  })
);

function getSteps() {
  return ["Feb 10 2021, 10:00 am (First visit)  ", "Mar 15", "Mar 21 (Today)"];
}
function getStepContent(step: number) {
  switch (step) {
    case 0:
      return `Details.....`;
    case 1:
      return "Details....";
    case 2:
      return `Details...`;
    default:
      return "Unknown step";
  }
}

export default function ChatWindowHeader() {
  const classes = useStyles();
  const { setIsChatWindowOpen } = useChatContext();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    if (steps.length !== activeStep)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  interface chatProps {
    name?: () => void;
    icon?: () => void;
  }

  return (
    <div className={classes.container}>
      <div className={classes.mainProfileContiner}>
        <div className={classes.profile}>
          <div style={{ alignSelf: "center", marginRight: "0.5em" }}>
            <img src={logo} className={classes.imag} alt="user" />
          </div>

          <div>
            <span className={classes.profile}>
              <span className={classes.text}>Patient name : </span>
              <span>Sophia, Iva </span>
            </span>
            <span className={classes.profile}>
              <span className={classes.text}>Age : </span>
              <span>65 </span>
            </span>
            <span className={classes.profile}>
              <span className={classes.text}>Last visit : </span>
              <span>Feb 10 2021 </span>
            </span>
          </div>
        </div>
        <button
          className={classes.closeChatWindow}
          onClick={() => setIsChatWindowOpen(false)}
        >
          <CloseIcon />
        </button>
      </div>

      <div className={classes.scrollableView}>
        {/* history */}

        <div style={{ marginTop: "1em" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.topH}
            >
              <img src={historylogo} className={classes.imag1} alt="history" />
              <Typography className={classes.heading}>History Note</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ overflow: "hidden" }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel onClick={handleNext}>{label}</StepLabel>
                      <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div className={classes.actionsContainer}>
                          <div>
                            <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                            {/* {activeStep === steps.length - 1 &&  <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Finish
                </Button>} */}
                          </div>
                        </div>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper
                    square
                    elevation={0}
                    className={classes.resetContainer}
                  >
                    <Typography>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset} className={classes.button}>
                      Reset
                    </Button>
                  </Paper>
                )}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* history ends */}
        {/* patients h */}
        <div style={{ marginTop: "1em" }}>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.topH}
            >
              <img src={historylogo} className={classes.imag1} alt="history" />
              <Typography className={classes.heading}>
                Patient History
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ overflow: "hidden" }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel onClick={handleNext}>{label}</StepLabel>
                      <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div className={classes.actionsContainer}>
                          <div>
                            <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                            {/* {activeStep === steps.length - 1 &&  <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Finish
                </Button>} */}
                          </div>
                        </div>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper
                    square
                    elevation={0}
                    className={classes.resetContainer}
                  >
                    <Typography>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset} className={classes.button}>
                      Reset
                    </Button>
                  </Paper>
                )}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* patients h ends */}
        {/* lab orders */}
        <div style={{ marginTop: "1em" }}>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.topH}
            >
              <img src={historylogo} className={classes.imag1} alt="history" />
              <Typography className={classes.heading}>Lab Order</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ overflow: "hidden" }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel onClick={handleNext}>{label}</StepLabel>
                      <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div className={classes.actionsContainer}>
                          <div>
                            <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                            {/* {activeStep === steps.length - 1 &&  <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Finish
                </Button>} */}
                          </div>
                        </div>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper
                    square
                    elevation={0}
                    className={classes.resetContainer}
                  >
                    <Typography>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset} className={classes.button}>
                      Reset
                    </Button>
                  </Paper>
                )}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* lab orders ends */}
        {/* prescriptions */}
        <div style={{ marginTop: "1em" }}>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.topH}
            >
              <img src={historylogo} className={classes.imag1} alt="history" />
              <Typography className={classes.heading}>Prescriptions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ overflow: "hidden" }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel onClick={handleNext}>{label}</StepLabel>
                      <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div className={classes.actionsContainer}>
                          <div>
                            <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                            {/* {activeStep === steps.length - 1 &&  <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Finish
                </Button>} */}
                          </div>
                        </div>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper
                    square
                    elevation={0}
                    className={classes.resetContainer}
                  >
                    <Typography>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset} className={classes.button}>
                      Reset
                    </Button>
                  </Paper>
                )}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* prescriptions ends */}
      </div>
    </div>
  );
}
