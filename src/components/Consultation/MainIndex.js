import React from "react";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppStateProvider, { useAppState } from "./state";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ErrorDialog from "./components/ErrorDialog/ErrorDialog";
import LoginPage from "./components/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import theme from "./theme";
import "./types";
import { ChatProvider } from "./components/ChatProvider";
import { VideoProvider } from "./components/VideoProvider";
import useConnectionOptions from "../../utilities/useConnectionOptions/useConnectionOptions";
import UnsupportedBrowserWarning from "./components/UnsupportedBrowserWarning/UnsupportedBrowserWarning";
import Consultation from "./Consultation";

export const VideoApp = () => {
  const { error, setError } = useAppState();
  const connectionOptions = useConnectionOptions();

  return (
    <VideoProvider options={connectionOptions} onError={setError}>
      <ErrorDialog dismissError={() => setError(null)} error={error} />
      <ChatProvider>
        <Consultation />
      </ChatProvider>
    </VideoProvider>
  );
};

const MainIndex = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <UnsupportedBrowserWarning>
        <Router>
          <AppStateProvider>
            <Switch>
              <PrivateRoute exact path="/video">
                <VideoApp />
              </PrivateRoute>
              <PrivateRoute path="/room/:URLRoomName">
                <VideoApp />
              </PrivateRoute>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Redirect to="/" />
            </Switch>
          </AppStateProvider>
        </Router>
      </UnsupportedBrowserWarning>
    </MuiThemeProvider>
  );
};

export default MainIndex;
