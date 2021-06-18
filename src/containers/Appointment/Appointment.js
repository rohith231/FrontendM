import React, { Component } from "react";
import AppointmentBooking from "../../components/Appointment/Appointment";
import { connect } from "react-redux";
import * as actions from "../../store/actions/login";

class Appointment extends Component {
  render() {
    return (
      <div>
        <AppointmentBooking specialities={[]}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    specialities: state.specialities,
  };
};

const mapDispatchtoProp = (dispatch) => {
  return {
    sendOtp: (mob) => dispatch(actions.sendOtp(mob)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProp)(Appointment);
