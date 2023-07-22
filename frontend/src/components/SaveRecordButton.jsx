import React from "react";
import { Button } from "@mui/material";
import { ApplicationFormContext } from "../context/ApplicationFormContext";

function SaveRecordButton() {
  const { saveRecord } = React.useContext(ApplicationFormContext);
  return (
    <Button
      variant="contained"
      onClick={(event) => saveRecord()}
      sx={{ width: "100%", minHeight: "3.5rem" }}
    >
      Save Record
    </Button>
  );
}

export default SaveRecordButton;
