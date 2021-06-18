import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Toast from "../../utilities/toast";
import { toast } from "react-toastify";
import * as actions from "../../store/actions/login";
import LoginAnotherWayForm from "../../components/Login/LoginAnotherWay";

class LoginAnotherWay extends Component {
  state = {
    selectedValue: "",
    showEmail: false,
    maskedEmail: "",
    errorMsg: null,
    isError: false,
    validateOtp: false,
    showSecurityQuestions: false,
    isEmailSelect: false,
  };

  componentDidUpdate(nextProps) {
    const { resetData, patientData } = this.props;
    if (nextProps.resetData !== resetData) {
      if (resetData) {
        localStorage.setItem("token", resetData.accessToke);
        if (this.state.loginType === "Email") {
          this.setState({
            showEmail: true,
            showSecurityQuestions: false,
            maskedEmail: resetData.MaskedEmail,
          });
        } else if (this.state.loginType === "security") {
          localStorage.setItem("token", resetData.accessToken);
          let securityQuestions = {
            securityQestion1: resetData.securityQestion1,
            securityQestion2: resetData.securityQestion2,
            securityQestion3: resetData.securityQestion3,
          };
          console.log(securityQuestions);
          this.setState({
            showSecurityQuestions: true,
            showEmail: false,
            securityQuestions,
          });
        }
      }
    }
    if (nextProps.patientData !== patientData) {
      this.props.history.push("/patient-dashboard");
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    if (
      this.props.resetData &&
      event.target.name !== "phone" &&
      event.target.value !== this.state.loginType
    ) {
      this.setState(
        {
          showSecurityQuestions: false,
          showEmail: false,
          [event.target.name]: event.target.value,
        },
        () => {
          this.getResetDetails();
        }
      );
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  getResetDetails = () => {
    let data = {
      phoneNumber: `+91${this.state.phone}`,
      option: this.state.loginType,
    };
    this.props.getDetails(data);
  };
  sendOtpToEmail = () => {
    this.props.sendOtpToEmail({ email: this.state.maskedEmailInput });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getResetDetails();
  };

  handleStateChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  verifySecurityQuestions = () => {
    console.log(this.state);
    let data = { ...this.state.securityQuestions };
    data.securityAnswer1 = this.state.securityAnswer1;
    data.securityAnswer2 = this.state.securityAnswer2;
    data.securityAnswer3 = this.state.securityAnswer3;
    delete data.__proto__;
    console.log(data);
    this.props.verifyQuestions(data);
  };
  render() {
    const { loading } = this.props;
    // if (loading) {
    //   toast.dark("Hey 👋, its Loading");
    // }
    return (
      <div>
        <Toast position={"top-right"}></Toast>
        <Header />
        <LoginAnotherWayForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          selectedValue={this.state.selectedValue}
          showEmail={this.state.showEmail}
          showSecurityQuestions={this.state.showSecurityQuestions}
          maskedEmail={this.state.maskedEmail}
          isEmailSelect={this.state.isEmailSelect}
          isEmailValid={this.props.isEmailValid}
          handleStateChange={this.handleStateChange}
          handleEmail={this.validateEmail}
          sendOtpToEmail={this.sendOtpToEmail}
          securityQuestions={this.state.securityQuestions}
          verifySecurityQuestions={this.verifySecurityQuestions}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loader.loading,
    resetData: state.login.resetData,
    isEmailValid: state.login.isEmailValid,
    patientData: state.login.patientData,
  };
};

const mapDispatchtoProp = (dispatch) => {
  return {
    getDetails: (data) => dispatch(actions.getDetails(data)),
    sendOtpToEmail: (data) => dispatch(actions.sendOtpToEmail(data)),
    verifyQuestions: (data) => dispatch(actions.verifyQuestions(data)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProp)(LoginAnotherWay);
