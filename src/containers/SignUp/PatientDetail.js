import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { toast } from "react-toastify";
import Toast from "../../utilities/toast";
import { connect } from "react-redux";
import * as actions from "../../store/actions/register";
import PatientForm from "../../components/SignUp/patientDetail";
import { mobileRegex, emailRegex } from "../../utilities/regex";

class PatientDetail extends Component {
  state = {
    errorMsg: null,
    isError: false,
    errorFlag: {
      firstName: false,
      lastName: false,
      dob: false,
      email: false,
      phone: false,
      otp: false,
    },
  };

  handleChangeAll = (event) => {
    event.preventDefault();
    // console.log(event.target.name, event.target.value);
    let eFlags = this.validate(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = (field, value) => {
    console.log("field------>>>>",field);
    console.log("value------>>>>",value);
    let errFlag = false;
    let eFlags = this.state.errorFlag;
    switch (field) {
      case "address1":
      case "address2":
      case "securityQestion1":
      case "securityQestion2":
      case "securityQestion3":
        eFlags[field] = value === "" ? true : false;
        break;
      case "zipcode":
        eFlags[field] =
          value === "" || value.length <= 5 ? true : false;
        break;
      default:
        errFlag = true;
    }
    return eFlags;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      address1: this.state.address1,
      address2: this.state.address2,
      securityAnswer1: this.state.securityAnswer1,
      securityAnswer2: this.state.securityAnswer2,
      securityAnswer3: this.state.securityAnswer3,
      securityQestion1: this.state.securityQestion1,
      securityQestion2: this.state.securityQestion2,
      securityQestion3: this.state.securityQestion3,
      zip: parseInt(this.state.zipcode),
    };
    this.props.completeProfile(data);
  };

  validate = (field, value) => {
    let errFlag = false;
    let eFlags = this.state.errorFlag;
    switch (field) {
      case "address1":
      case "address2":
      case "zipcode":
        eFlags[field] = value === "" ? true : false;
        break;
      case "dob":
        this.calculateAge(value);
        eFlags[field] =
          value === "" || !this.calculateAge(value) ? true : false;
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

  render() {
    const { loading, patientData } = this.props;
    // if (loading) {
    //   toast.dark("Hey 👋, its Loading");
    // }
    if (patientData) {
      if (patientData.isProfileComplete === undefined) {
        this.props.history.push("/patient-dashboard");
      }
    }
    return (
      <div>
        <Toast position={"top-right"}></Toast>
        <Header />
        <PatientForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChangeAll}
          handleSubscribe={this.handleSubscribe}
          verifyCallback={() => {}}
          errorMsg={null}
          validate={1}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loader.loading,
    error: state.loader.error,
    patientData: state.login.patientData,
  };
};

const mapDispatchtoProp = (dispatch) => {
  return {
    completeProfile: (data) => dispatch(actions.completeProfile(data)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProp)(PatientDetail);
