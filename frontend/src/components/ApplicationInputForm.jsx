import React from "react";
import { Box, Grid, Button } from "@mui/material";
import CompanyNameInput from "./CompanyNameInput";
import StatusInput from "./StatusInput";

function ApplicationInputForm() {
  const saveRecord = (event) => {
    console.log("Record Needs To Be Saved!!!");
  };

  return (
    <>
      <Grid container px={2} py={2}>
        <Grid item xs={12} md={5} bgcolor={"cyan"} p={1}>
          <Box p={1}>
            <CompanyNameInput />
          </Box>
        </Grid>
        <Grid item xs={12} md={5} bgcolor={"yellow"} p={1}>
          <Box p={1}>
            <StatusInput />
          </Box>
        </Grid>
        <Grid item xs={12} md={2} bgcolor={"gray"} p={1}>
          <Box p={1}>
            <Button
              variant="contained"
              onClick={(event) => saveRecord(event)}
              sx={{ width: "100%", minHeight: "3.5rem" }}
            >
              Save Record
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ApplicationInputForm;
