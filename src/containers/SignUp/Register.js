import React, { Component } from "react";
import RegisterForm from "../../components/SignUp/register";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { toast } from "react-toastify";
import Toast from "../../utilities/toast";
import { connect } from "react-redux";
import * as actions from "../../store/actions/register";
import { mobileRegex, emailRegex } from "../../utilities/regex";
import Modal from "../../utilities/modal/modal";
import moment from "moment"

class Register extends Component {
  state = {
    errorFlag: {
      firstName: false,
      lastName: false,
      dob: false,
      email: false,
      phone: false,
      otp: false
    },
    isError: false,
    otpErrMsg: "Please enter a valid otp",
  };

  registerWithOtp = (phone) => {
    const data = {
      phoneNumber: `+91${this.state.phone}`,
      fname: this.state.firstName,
      lname: this.state.lastName,
      dob: this.state.dob,
      email: this.state.email,
      otp: this.state.otp,
    };
    this.props.registerPatient(data);
  };

  sendOtp = () => {
    this.props.sendOtpRegister({
      phoneNumber: `+91${this.state.phone}`,
      channel: "sms",
    });
  };

  goBack = () => {
    this.props.setNewUser(false);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let errField = ["firstName", "lastName", "dob", "phone"];
    let errFlag = this.state.errorFlag;
    errField.map(field => {
      if (!this.state[field]) {
        errFlag[field] = true;
      }
    })
    const { firstName, lastName, dob, phone, email } = this.state;
    if (!firstName || !lastName || !dob || !phone || !email) {
      console.log("Inside If");
      this.setState({ errorFlag: errFlag })
    } else {
      this.sendOtp();
    }
    console.log("State--------->>>>", this.state.errorFlag);

  };

  formatDate = (date) => {
    console.log((moment(date).diff('10-11-2010', 'years')) * -1);
    return moment(date).format("YYYY-MM-DD");
  }

  handleChangeAll = (event) => {
    // event.preventDefault();
    console.log("handleChangeAll called----->>>>", event);
    let eFlags = this.validate(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
      // errorFlag: eFlags,
    });
  };

  handleDateChange = (date) => {
    this.setState({ dob: moment(date).format("YYYY/MM/DD") })
    console.log("handleDateChange called------->>>>>", moment(date).format("YYYY/MM/DD"));
  }

  calculateAge = (value) => {
    console.log("value---->>>", value);
    console.log("Diff==========>>>>", ((moment('15-6-2003').diff(moment(), 'years'))));
    return ((moment(value).diff('10-11-2010', 'years')) * -1) >= 18 ? false : true
  };

  setNewUserChange = () => {
    let user = {
      isUserExist: false,
      message: "",
    };
    this.props.setNewUser(user);
  };

  handleClose = () => {
    this.setNewUserChange();
  };

  handleLogin = () => {
    this.setNewUserChange();
    this.props.history.push("/");
  };

  validate = (field, value) => {
    let errFlag = false;
    let eFlags = this.state.errorFlag;
    switch (field) {
      case "firstName":
      case "lastName":
        eFlags[field] = value === "" ? true : false;
        break;
      case "dob":
        // this.calculateAge(value);
        eFlags[field] = value === "" ? true : false;
        break;
      case "email":
        eFlags[field] = value === "" || !emailRegex.test(value) ? true : false;
        break;
      case "phone":
        eFlags[field] = value === "" || !mobileRegex.test(value) ? true : false;
        break;
      case "otp":
        eFlags[field] = value === "" || value.length !== 6 ? true : false;
        break;
      default:
        errFlag = true;
    }
    return eFlags;
  };

  handleModalClose = () => {
    return false
  }

  render() {
    const { loading, isNewUser, patientData } = this.props;
    console.log("this.state------>>>>", this.state);
    // if (loading) {
    //   toast.dark("Hey 👋, its Loading");
    // }
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
          openModal={this.props.isExistingUser || false}
          header={""}
          content={this.props.errorMsg}
          handleClose={this.handleClose}
          login={true}
          handleLogin={this.handleLogin}
        ></Modal>
        <Toast position={"top-right"}></Toast>
        <Header />
        <RegisterForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChangeAll}
          errorFlag={this.state.errorFlag}
          isNewUser={isNewUser}
          registerPatient={this.registerWithOtp}
          goBack={this.goBack}
          otpError={this.props.otpError}
          otpErrMsg={this.state.otpErrMsg}
          allFieldsError={this.state.allFieldsError}
          allFieldsErrorMsg={this.state.allFieldsErrorMsg}
          handleDateChange={this.handleDateChange}
          value={this.dateValue}
          sendOtp={this.sendOtp}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loader.loading,
    isNewUser: state.register.isNewUser,
    isExistingUser: state.register.isExistingUser,
    errorMsg: state.register.errorMsg,
    error: state.loader.error,
    otpError: state.register.otpError,
    patientData: state.login.patientData,
  };
};

const mapDispatchtoProp = (dispatch) => {
  return {
    sendOtpRegister: (data) => dispatch(actions.sendOtpRegister(data)),
    setNewUser: (val) => dispatch(actions.handleBack(val)),
    registerPatient: (data) => dispatch(actions.register(data)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProp)(Register);
