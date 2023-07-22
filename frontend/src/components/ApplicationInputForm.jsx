import React from "react";
import { Box, Grid, Button } from "@mui/material";
import CompanyNameInput from "./CompanyNameInput";
import StatusInput from "./StatusInput";
import JobPositionInput from "./JobPositionInput";
import ApplicationDateInput from "./ApplicationDateInput";
import { ApplicationFormContextProvider } from "../context/ApplicationFormContext";
import SaveRecordButton from "./SaveRecordButton";

function ApplicationInputForm() {
  return (
    <>
      <ApplicationFormContextProvider>
        <Grid container px={2} py={2} columns={20}>
          <Grid item xs={20} sm={10} md={10} lg={4} p={1}>
            <Box p={1}>
              <CompanyNameInput />
            </Box>
          </Grid>
          <Grid item xs={20} sm={10} md={10} lg={4} p={1}>
            <Box p={1}>
              <JobPositionInput />
            </Box>
          </Grid>
          <Grid item xs={20} sm={10} md={10} lg={4} p={1}>
            <Box p={1}>
              <StatusInput />
            </Box>
          </Grid>
          <Grid item xs={20} sm={10} md={10} lg={4} p={1}>
            <Box p={1}>
              <ApplicationDateInput />
            </Box>
          </Grid>
          <Grid item xs={20} sm={20} md={20} lg={4} p={1}>
            <Box p={1}>
              <SaveRecordButton />
            </Box>
          </Grid>
        </Grid>
      </ApplicationFormContextProvider>
    </>
  );
}

export default ApplicationInputForm;
