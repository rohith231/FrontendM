import React, { Component } from "react";
import LoginForm from "../../components/Login/Login";
import { connect } from "react-redux";
import * as actions from "../../store/actions/login";
import * as loaderActions from "../../store/actions/loader";
import LoadingPage from "../../utilities/loading-page/";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Toast from "../../utilities/toast";
import { toast } from "react-toastify";
import { mobileRegex } from "../../utilities/regex";
import Modal from "../../utilities/modal/modal";

class Login extends Component {
  state = {
    errorMsg: null,
    isError: false,
    errMsgContent: "You don't have account. Please Sign up.",
    errMsgHeader: "",
    otpErrMsg: "Please enter a valid otp",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  sendOtp = (event) => {
    event.preventDefault();
    if(!this.state.phoneNo){
      this.setState({errorMsg: "Please enter valid cellphone number", isError: true})
    }
    else {
      console.log("phoneNo----", this.state);
      this.props.sendOtp({
        phoneNumber: `+91${this.state.phoneNo}`,
        channel: "sms",
      });
    }
    // this.props.setIsValidUser(true);
  };

  goBack = () => {
    this.props.setIsValidUser(false);
  };
  handleClose = () => {
    this.props.setIsValidUser(false);
    this.props.setError(false);
  };
  handleSignUp = () => {
    this.props.setError(false);
    this.props.history.push("/register");
  };
  verifyLogin = () => {
    this.props.verifyLogin({
      cmmunicationMedium: `+91${this.state.phoneNo}`,
      otp: this.state.otp,
    });
  };
  setOtp = (event) => {
    this.setState({ otp: event.target.value });
  };
  validateMob = (event) => {
    event.preventDefault();
    console.log("handleChange Called");
    const phone = event.target.value;
    console.log("phone----", phone);
    if (!mobileRegex.test(phone)) {
      this.setState({
        errorMsg: "Please enter valid Mob/Phone Number",
        isError: true,
      });
    } else {
      this.setState({ errorMsg: null, isError: false, phoneNo: phone });
    }
  };

  render() {
    console.log("this.state------->>>>",this.state);
    const { loading, isValidUser, patientData } = this.props;
    // console.log(loading, isValidUser);
    if (patientData) {
      localStorage.setItem("token", patientData.accessToken);
      if (!patientData.isProfileComplete) {
        this.props.history.push("/PatientDetail");
      } else {
        this.props.history.push("/patient-dashboard");
      }
    }
    return (
      <div>
        <Modal
          openModal={this.props.error}
          header={""}
          content={this.state.errMsgContent}
          handleClose={this.handleClose}
          signup={true}
          handleSignUp={this.handleSignUp}
        ></Modal>
        <Toast position={"top-right"}></Toast>
        <Header />
        <LoginForm
          handleSubmit={this.sendOtp}
          handleChange={this.validateMob}
          errorMsg={this.state.errorMsg}
          isValidUser={this.props.isValidUser}
          handleBack={this.goBack}
          verifyLogin={this.verifyLogin}
          setOtp={this.setOtp}
          otpError={this.props.otpError}
          validationError={this.state.isError}
          otpErrMsg={this.state.otpErrMsg}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("------", state);
  return {
    loading: state.loader.loading,
    error: state.loader.error,
    isValidUser: state.login.isValidUser,
    patientData: state.login.patientData,
    otpError: state.login.otpError,
  };
};

const mapDispatchtoProp = (dispatch) => {
  return {
    sendOtp: (mob) => dispatch(actions.sendOtp(mob)),
    setIsValidUser: (val) => dispatch(actions.setUser(val)),
    setError: (val) => dispatch(loaderActions.setError(val)),
    verifyLogin: (data) => dispatch(actions.verifyLogin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProp)(Login);
