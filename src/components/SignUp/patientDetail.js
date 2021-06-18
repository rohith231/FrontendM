import React from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  InputBase,
  withStyles,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import "./patientDetail.scss";
import { securityQuestions } from "../../constants/securityQuestions";
import  RegisterCaptcha from "../../containers/SignUp/RegisterCaptcha";
import Modal from "../../utilities/modal/modal";



const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}))(InputBase);

const PatientForm = ({
  handleSubmit,
  handleChange,
  errorMsg,
  validate,
  handleSubscribe,
}) => {
  const [captchaVerified, setCaptchaVerified] = React.useState(false);

  const verifyCallback = (response) => {
    if (response) {
      setCaptchaVerified(true);
    }
  };

 
  // const onSubmit = () => {
  //   if (captchaVerified) {
  //     handleSubmit();
  //   } else {
  //     <>
  //     <Alert severity="error">This is an error alert — check it out!</Alert>
  //      </> 
  //   }
  
  // };

  const onSubmit = () =>{
    captchaVerified ? handleSubmit() : alert("verify")
  }


  return (
    <Container className="container">
      <Grid container className="form-wrapper">
        <Grid item xs={6} className="" span={12}>
          <img
            className="form-img"
            src="http://source.unsplash.com/620x700/?medical"
            alt="spaceship"
          />
        </Grid>
        <Grid item xs={6} className="" span={12} ml={2}>
          <form onSubmit={onSubmit} className="form" noValidate>
            <h1>Create your patient account</h1>
            <FormLabel className="input-label" component="legend">
              Address line 1
            </FormLabel>
            <TextField
              required
              error={false}
              helperText={errorMsg}
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="address1"
              placeholder="Enter your Address 1"
              onChange={handleChange}
            />

            {errorMsg}

            <FormLabel className="input-label" component="legend">
              Address line 2
            </FormLabel>
            <TextField
              required
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="address2"
              placeholder="Enter your Address 2"
              onChange={handleChange}
            />
            <FormLabel className="input-label" component="legend">
              Zip code
            </FormLabel>
            <TextField
              required
              error={false}
              helperText={errorMsg}
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="zipcode"
              placeholder="Enter your Zip code"
              onChange={handleChange}
            />
            <FormLabel className="input-label" component="legend">
              Security question 1
            </FormLabel>
            <FormControl
              variant="outlined"
              name="securityQestion1"
              className="text-input"
              error={false}
            >
              <Select
                onChange={handleChange}
                name="securityQestion1"
                placeholder={"Please Select"}
              >
                {/* <MenuItem value="Please Select">
                  <em>Please Select</em>
                </MenuItem> */}
                {securityQuestions.map((el, key) => {
                  return (
                    <MenuItem value={el} key={key}>
                      {el}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormLabel className="input-label" component="legend">
              Answer
            </FormLabel>
            <TextField
              required
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="securityAnswer1"
              placeholder="Enter your answer"
              onChange={handleChange}
            />

            <FormLabel
              className="input-label"
              component="legend"
              name="securityQestion2"
              error={false}
            >
              Security question 2
            </FormLabel>
            <FormControl variant="outlined" className="text-input">
              <Select name="securityQestion2" onChange={handleChange}>
                {securityQuestions.map((el, key) => {
                  return (
                    <MenuItem value={el} key={key}>
                      {el}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormLabel className="input-label" component="legend">
              Answer
            </FormLabel>
            <TextField
              required
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="securityAnswer2"
              placeholder="Enter your answer"
              onChange={handleChange}
            />
            <FormLabel className="input-label" component="legend">
              Security question 3
            </FormLabel>
            <FormControl
              variant="outlined"
              className="text-input"
              name="securityQestion3"
              error={false}
            >
              <Select name="securityQestion3" onChange={handleChange}>
                {securityQuestions.map((el, key) => {
                  return (
                    <MenuItem value={el} key={key}>
                      {el}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormLabel className="input-label" component="legend">
              Answer
            </FormLabel>
            <TextField
              required
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="securityAnswer3"
              placeholder="Enter your answer"
              onChange={handleChange}
            />
            <Grid style={{ position: "relative", top: -30, left: 0, right: 0 }}>
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
              />
              <FormLabel style={{ fontSize: 14 }}>
                I agree to the<span className="span">Terms and Conditions</span>
                and the <span className="span">Privacy Policy</span>
              </FormLabel>
              <RegisterCaptcha
                onChange={handleSubscribe}
                verifyCallback={verifyCallback}
              />

            </Grid>

            <div className="submit">
              <Button type="submit" variant="contained" className="btn-primary">
                Register
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PatientForm;
