import React from "react";
import "./Login.scss";
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  TextField,
  Grid,
  Container,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";

const LoginAnotherWayForm = ({
  selectedValue,
  handleChange,
  handleSubmit,
  showEmail,
  isEmailValid,
  showSecurityQuestions,
  btnTitle,
  isEmailSelect,
  handleEmail,
  maskedEmail,
  emailOtpSent,
  sendOtpToEmail,
  verifyEmailOtp,
  verifySecurityQuestions,
  handleStateChange,
  securityQuestions,
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
              <Link to="/">
                <ArrowBackIosIcon color="primary" />
              </Link>
              Login to your account
            </h1>
            <FormLabel className="input-label" component="legend">
              Cellphone
            </FormLabel>
            <TextField
              required
              id="filled-required"
              variant="outlined"
              size="small"
              className="text-input"
              type="tel"
              name="phone"
              placeholder="Enter your Cell Phone"
              maxLength="10"
              onChange={handleChange}
            />
            <div className="m-container">
              <div className="r-container">
                <RadioGroup
                  aria-label="loginType"
                  name="loginType"
                  onChange={handleChange}
                  row={true}
                >
                  <FormControlLabel
                    value={"Email"}
                    control={<Radio />}
                    label="Email"
                  />
                  <FormControlLabel
                    value={"security"}
                    control={<Radio />}
                    label="Security Questions"
                  />
                </RadioGroup>
              </div>
            </div>
            {showEmail ? (
              <>
                <FormLabel className="input-label" component="legend">
                  Email: {maskedEmail}
                </FormLabel>
                <TextField
                  required
                  id="filled-required"
                  variant="outlined"
                  size="small"
                  className="text-input"
                  type="input"
                  name="maskedEmailInput"
                  placeholder="Enter your Email"
                  onChange={handleStateChange}
                />
                {isEmailValid ? (
                  <>
                    <FormLabel className="input-label" component="legend">
                      Enter your one-time password sent to your email
                    </FormLabel>
                    <TextField
                      required
                      id="filled-required"
                      variant="outlined"
                      size="small"
                      className="text-input"
                      name="otp"
                      placeholder=""
                      onChange={null}
                    />
                  </>
                ) : null}
              </>
            ) : null}
            {showSecurityQuestions ? (
              <>
                {securityQuestions &&
                  Object.keys(securityQuestions).map((key, value) => {
                    return (
                      <div key={key}>
                        <FormLabel className="input-label" component="legend">
                          Security question {value + 1}:{" "}
                          {securityQuestions[key]}
                        </FormLabel>
                        <TextField
                          required
                          id="filled-required"
                          variant="outlined"
                          size="small"
                          className="text-input"
                          name={"securityAnswer" + (value + 1)}
                          placeholder="Answer"
                          onChange={handleStateChange}
                        />
                      </div>
                    );
                  })}
              </>
            ) : null}
            {showEmail ? (
              isEmailValid ? (
                <Button
                  variant="contained"
                  className="btn-primary"
                  onClick={verifyEmailOtp}
                >
                  Login
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className="btn-primary"
                  onClick={sendOtpToEmail}
                >
                  Submit
                </Button>
              )
            ) : showSecurityQuestions ? (
              <Button
                variant="contained"
                className="btn-primary"
                onClick={verifySecurityQuestions}
              >
                Login
              </Button>
            ) : (
              <Button type="submit" variant="contained" className="btn-primary">
                Submit
              </Button>
            )}
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginAnotherWayForm;
