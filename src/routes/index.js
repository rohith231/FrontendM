import loginAnotherWay from "../containers/Login/LoginAnotherWay";
import login from "../containers/Login/Login";
import Register from "../containers/SignUp/Register";
import patientDetail from "../containers/SignUp/PatientDetail";
import register from "../containers/SignUp/Register";
import appointment from "../containers/Appointment/Appointment";
import PatientLandingPage from "../containers/Patient/patient";
import MainIndex from "../components/Consultation/MainIndex";

export const routes = [
  {
    path: "/",
    component: login,
  },
  {
    path: "/Register",
    component: register,
  },
  {
    path: "/PatientDetail",
    component: patientDetail,
  },
  {
    path: "/signup",
    component: Register,
  },
  {
    path: "/appointment",
    component: appointment,
  },
  {
    path: "/loginAnotherWay",
    component: loginAnotherWay,
  },
  {
    path: "/patient-dashboard",
    component: PatientLandingPage,
  },
  {
    path:"/video",
    component:MainIndex
  }
];
