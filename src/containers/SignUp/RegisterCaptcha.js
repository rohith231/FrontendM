import React, { Component } from "react";
import Recaptcha from "react-recaptcha";

class RegisterCaptcha extends Component {
  constructor(props) {
    super(props);
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);

    this.state = {
      isVerified: false,
    };
  }

  recaptchaLoaded() {
    console.log("capcha successfully loaded");
  }

  handleSubscribe() {
    if (this.state.isVerified) {
      alert("You have successfully subscribed!");
    } else {
      alert("Please verify that you are a human!");
    }
  }

  render() {
    return (
      <>
        <div onClick={this.handleSubscribe}>
          <Recaptcha
            sitekey="6LfrODEbAAAAANyhlLaAwEGQVhdCI0xo1sPWPVPJ"
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.props.verifyCallback}
          />
        </div>
      </>
    );
  }
}

export default RegisterCaptcha;