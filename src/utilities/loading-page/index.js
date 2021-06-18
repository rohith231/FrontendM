import React, { Component } from "react";
import LoadingPageContainer from "./loadingPageStyle";
import { CircularProgress } from "@material-ui/core";

class LoadingPage extends Component {
  render() {
    return (
      <LoadingPageContainer>
        <div className="loaderWrapper">
          <div className="loader">
            <CircularProgress variant="determinate" value={75} />
            <small> Loading </small>
          </div>
        </div>
      </LoadingPageContainer>
    );
  }
}

export default LoadingPage;
