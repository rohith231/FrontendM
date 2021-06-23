import React from "react";
import {
  Grid,
  TextField,
  FormLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Snackbar,
} from "@material-ui/core";

import { useStyles } from "./styles";
import ClearIcon from "@material-ui/icons/Clear";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";

interface IParticipantData {
  firstName: string;
  lastName: string;
  cellphone: string;
  email: string;
  relationship: string;
}
interface AddParticipantDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddParticipantDialog: React.FunctionComponent<AddParticipantDialogProps> = ({
  open,
  onClose,
}) => {
  const classes = useStyles();
  const [isSnackBarOpen, setSnackBarOpen] = React.useState(false);

  const addParticipant = async (
    data: IParticipantData,
    resetForm: Function
  ) => {
    try {
      // TODO: Redux or API call integration
      // On Success, show notification
      setSnackBarOpen(true);
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (error) {
    } finally {
    }
  };

  const renderLabel = (label: string): React.ReactElement => (
    <FormLabel className={classes.label} component="legend">
      {label}&nbsp;<span className={classes.redText}>*</span>
    </FormLabel>
  );

  return (
    <Dialog open={open} classes={{ paper: classes.paper }}>
      <ClearIcon onClick={onClose} className={classes.closeIcon} />
      <DialogTitle className={classes.header}>Add Participants</DialogTitle>

      <DialogContent className={classes.container}>
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              cellphone: "",
              email: "",
              relationship: "",
            }}
            onSubmit={(values: IParticipantData, actions) => {
              addParticipant(values, actions.resetForm);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required("Enter valid email-id"),
              firstName: Yup.string().required("Please enter first name"),
              lastName: Yup.string().required("Please enter last name"),
              cellphone: Yup.string().required("Please enter last name"),
              relationship: Yup.string().required(
                "Please enter your relationship"
              ),
            })}
          >
            {(props: FormikProps<IParticipantData>) => {
              const {
                values,
                touched,
                errors,
                handleBlur,
                handleChange,
                isSubmitting,
              } = props;
              return (
                <Form className={classes.form}>
                  <Grid container justify="space-around" direction="row">
                    {renderLabel("First Name")}
                    <TextField
                      name="firstName"
                      id="firstName"
                      variant="outlined"
                      className={classes.textInput}
                      placeholder="Enter your first name"
                      size="small"
                      value={values.firstName}
                      error={
                        errors.firstName && touched.firstName ? true : false
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {renderLabel("Last Name")}
                    <TextField
                      name="lastName"
                      id="lastName"
                      variant="outlined"
                      className={classes.textInput}
                      placeholder="Enter your last name"
                      size="small"
                      value={values.lastName}
                      error={errors.lastName && touched.lastName ? true : false}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {renderLabel("Email")}
                    <TextField
                      name="email"
                      id="email"
                      variant="outlined"
                      className={classes.textInput}
                      placeholder="Enter your email"
                      size="small"
                      value={values.email}
                      type="email"
                      error={errors.email && touched.email ? true : false}
                      helperText={
                        values.email && errors.email && touched.email
                          ? errors.email
                          : ""
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {renderLabel("CellPhone")}
                    <TextField
                      name="cellphone"
                      id="cellphone"
                      variant="outlined"
                      className={classes.textInput}
                      placeholder="Enter your cellphone"
                      size="small"
                      value={values.cellphone}
                      error={
                        errors.cellphone && touched.cellphone ? true : false
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {renderLabel("Relationship")}
                    <TextField
                      name="relationship"
                      id="relationship"
                      variant="outlined"
                      className={classes.textInput}
                      placeholder="Enter your relationship"
                      size="small"
                      value={values.relationship}
                      type="relationship"
                      error={
                        errors.relationship && touched.relationship
                          ? true
                          : false
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                      className={classes.button}
                    >
                      Add
                    </Button>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </div>
        <Snackbar
          open={isSnackBarOpen}
          onClose={() => setSnackBarOpen(false)}
          autoHideDuration={1000}
          message="Email is sent to the participant successfully."
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddParticipantDialog;
