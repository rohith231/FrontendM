import React from "react";
import "./patient.scss";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PatientDashboard = () => {
  return (
    <div>
      <Header></Header>
      <Container className="patient-container">
        Welcome to Patient Dashboard!!
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default PatientDashboard;
