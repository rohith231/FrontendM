import React from "react";
import {
  Button,
  Container,
  FormLabel,
  Grid,
  TextField,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
// import MomentUtils from "@date-io/moment"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./register.scss";
import { Link } from "react-router-dom";

const requiredFirstname = "Please enter first name";
const requiredlastname = "Please enter last name";
const requireddob = "Please enter correct date of birth";
const emailError = "Please enter correct email";
const phoneError = "Please enter correct phone number";

const dateValue = (date) => {
  return date ? date : new Date()
}

const RegisterForm = ({
  handleSubmit,
  handleDateChange,
  isNewUser,
  handleChange,
  errorFlag,
  registerPatient,
  goBack,
  otpError,
  otpErrMsg,
  sendOtp,
}) => {
  // console.log("dateValue----->>>",dateValue());
  const errorFlagArray = Object.entries(errorFlag);
  let validationError = false;
  errorFlagArray.filter(([key, value]) => {
    if (value) {
      validationError = true;
    }
  });
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
          <form className="form" onSubmit={handleSubmit} noValidate>
            <h1>
              {isNewUser ? (
                <ArrowBackIosIcon color="primary" onClick={goBack} />
              ) : null}
              Register to book appointment
            </h1>
            <FormLabel className="input-label" component="legend">
              First name<span className="astrik">*</span>
            </FormLabel>
            <TextField
              required
              error={errorFlag.firstName}
              helperText={errorFlag.firstName ? requiredFirstname : null}
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="firstName"
              placeholder="Enter your first name"
              onChange={handleChange}
            />
            <div
              style={{
                position: "relative",
                top: -25,
                left: 0,
                fontSize: 14,
                color: "red",
              }}
            ></div>
            <FormLabel className="input-label" component="legend">
              Last name<span className="astrik">*</span>
            </FormLabel>
            <TextField
              required
              error={errorFlag.lastName}
              helperText={errorFlag.lastName ? requiredlastname : null}
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="lastName"
              placeholder="Enter your last name"
              onChange={handleChange}
            />
            <div
              style={{
                position: "relative",
                top: -25,
                left: 0,
                fontSize: 14,
                color: "red",
              }}
            ></div>
            <FormLabel className="input-label" component="legend">
              Date of birth<span className="astrik">*</span>
            </FormLabel>
            {/* <MuiPickersUtilsProvider utils={MomentUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  error={errorFlag.dob}
                  helperText={errorFlag.dob ? requiredError : null}
                  variant="inline"
                  format="YYYY/MM/DD"
                  margin="normal"
                  name="dob"
                  id="date-picker-inline"
                  value={dateValue()}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider> */}
            <TextField
              required
              error={errorFlag.dob}
              helperText={errorFlag.dob ? requireddob : null}
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="dob"
              placeholder="Enter your date of birth"
              onChange={handleChange}
            />
            <div
              style={{
                position: "relative",
                top: -25,
                left: 0,
                fontSize: 14,
                color: "red",
              }}
            ></div>
            <FormLabel className="input-label" component="legend">
              Email
            </FormLabel>
            <TextField
              required
              error={errorFlag.email}
              helperText={errorFlag.email ? emailError : null}
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <div
              style={{
                position: "relative",
                top: -25,
                left: 0,
                fontSize: 14,
                color: "red",
              }}
            ></div>
            <FormLabel className="input-label" component="legend">
              Cellphone<span className="astrik">*</span>
            </FormLabel>
            <TextField
              required
              error={errorFlag.phone}
              helperText={errorFlag.phone ? phoneError : null}
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              name="phone"
              placeholder="Enter your cellphone"
              onChange={handleChange}
              inputProps={{ maxLength: 10 }}
            />

            <div
              style={{
                position: "relative",
                top: -25,
                left: 0,
                fontSize: 14,
                color: "red",
              }}
            ></div>

            {isNewUser ? (
              <div className="form-inputs">
                <FormLabel className="input-label" component="legend">
                  Enter your one-time password sent to your phone number
                </FormLabel>
                <TextField
                  required
                  id="filled-required"
                  variant="outlined"
                  size="small"
                  name="otp"
                  className="text-input"
                  helperText="Get one-time password"
                  onChange={handleChange}
                  error={otpError}
                  helperText={otpError ? otpErrMsg : null}
                />
                  <Button onClick={sendOtp}> Resend OTP </Button>
              </div>
            ) : null}
            <div className="submit">
              {isNewUser ? (
                <Button
                  variant="contained"
                  className="btn-primary"
                  onClick={registerPatient}
                  disabled={validationError}
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  className="btn-primary"
                  disabled={validationError}
                >
                  Submit
                </Button>
              )}
              <h5>
                Already have an account? <Link to="/">Log in</Link>
              </h5>
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegisterForm;
