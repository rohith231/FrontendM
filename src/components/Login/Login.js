import React from "react";
import "./Login.scss";
import Container from "@material-ui/core/Container";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const LoginForm = ({
  handleSubmit,
  handleChange,
  validationError,
  errorMsg,
  isValidUser,
  handleBack,
  verifyLogin,
  setOtp,
  otpError,
  otpErrMsg,
}) => {
  return (
    <Container className="container">
      <Grid container className="form-wrapper">
        <Grid item xs={6} className="" span={12}>
          <img
            className="form-img"
            src="http://source.unsplash.com/645x480/?medical"
            alt="spaceship"
          />
        </Grid>
        <Grid item xs={6} className="" span={12} ml={2}>
          <form onSubmit={handleSubmit} className="form" noValidate>
            <h1>
              {isValidUser ? (
                <ArrowBackIosIcon
                  color="primary"
                  onClick={() => handleBack()}
                />
              ) : null}
              Login to your account
            </h1>
            <FormLabel className="input-label" component="legend">
              Cellphone
            </FormLabel>
            <TextField
              required
              error={validationError}
              helperText={validationError ? errorMsg : null}
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              type="tel"
              name="phone"
              placeholder="Enter your cellphone"
              maxLength="10"
              onChange={handleChange}
            />
            {isValidUser ? (
              <div className="form-inputs">
                <FormLabel className="input-label" component="legend">
                  Enter your one-time password sent to your phone number
                </FormLabel>
                <TextField
                  required
                  id="filled-required"
                  variant="outlined"
                  size="small"
                  className="text-input"
                  onChange={setOtp}
                  error={otpError}
                  helperText={otpError ? otpErrMsg : null}
                />
              </div>
            ) : null}
            <div className="submit">
              {isValidUser ? (
                <Button
                  variant="contained"
                  className="btn-primary"
                  onClick={verifyLogin}
                >
                  Login
                </Button>
              ) : (
                <Button
                  disabled={validationError}
                  type="submit"
                  variant="contained"
                  className="btn-primary"
                >
                  Submit
                </Button>
              )}
              <h5>
                Don’t have an account? <Link to="/Register">Register</Link>
              </h5>
            </div>
            <h5 className="error-login">
              Trouble logging in?{" "}
              <Link to="/LoginAnotherWay">Try different way</Link>
            </h5>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginForm;
