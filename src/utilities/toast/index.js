import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

class Toast extends Component {
  render() {
    return (
      <ToastContainer
        position={this.props.position}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    );
  }
}

export default Toast;
