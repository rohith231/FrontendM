import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const AppointmentBooking = ({ specialities, age, handleChange }) => {
  return (
    <div>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          {specialities.map((el) => {
            return (
              <MenuItem value={el.id} key={el.id}>
                el.name
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default AppointmentBooking;
