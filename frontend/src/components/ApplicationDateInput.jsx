import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { ApplicationFormContext } from "../context/ApplicationFormContext";

function ApplicationDateInput(props) {
  const { defaultDateValue, setApplicationDate } = React.useContext(
    ApplicationFormContext
  );

  const dateChangeHandler = (newValue) => {
    setApplicationDate(new Date(newValue.$d));
  };

  return (
    <>
      <DatePicker
        sx={{ width: "100%", minHeight: "3.5rem" }}
        format="DD-MMM-YYYY"
        defaultValue={dayjs(defaultDateValue)}
        onChange={(newValue) => dateChangeHandler(newValue)}
        label="When did you apply?"
      />
    </>
  );
}

export default ApplicationDateInput;
