import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function ApplicationDateInput({
  fireChangeEvent,
  defaultValue
}) {
  const today = new Date();
  const defaultDateValue = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  const [selectedDateValue, setSelectedDateValue] = React.useState(null);

  const dateChangeHandler = (newValue) => {
    console.log(newValue);
    setSelectedDateValue(new Date(newValue.$d).getFullYear());
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
