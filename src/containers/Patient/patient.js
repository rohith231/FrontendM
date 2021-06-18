import React, { Component } from "react";
import PatientDashboard from "../../components/Patient/patient";

class PatientLandingPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <PatientDashboard></PatientDashboard>
      </div>
    );
  }
}

export default PatientLandingPage;
