import React from "react";
import { Box, Grid, Button } from "@mui/material";
import CompanyNameInput from "./CompanyNameInput";
import StatusInput from "./StatusInput";
import JobPositionInput from "./JobPositionInput";
import ApplicationDateInput from "./ApplicationDateInput";

function ApplicationInputForm() {
  const [newApplicationRecord, setNewApplicationRecord] = React.useState({

  });
  const saveRecord = (event) => {
    console.log("Record Needs To Be Saved!!!");
  };

  const formFieldChangeHandlers = {
    handleSetCompany : (companyObj) => {
      if (companyObj) {
        setNewApplicationRecord({
          ...newApplicationRecord,
          company: companyObj
        })
      }
    },
    handleSetJobPosition : (positionObj) => {
      if (positionObj) {
        setNewApplicationRecord({
          ...newApplicationRecord,
          position: positionObj
        })
      }
    },
    handleSetDate : (dateValueObj) => {
      if (dateValueObj) {
        setNewApplicationRecord({
          ...newApplicationRecord,
          date: dateValueObj
        })
      }
    },
    handleSetStatus : (statusObj) => {
      if (statusObj) {
        setNewApplicationRecord({
          ...newApplicationRecord,
          status: statusObj
        })
      }
    },
  };

  return (
    <>
      <Grid container px={2} py={2}>
        <Grid item xs={12} md={12} bgcolor={"cyan"} p={1}>
          <Box p={1}>
            <CompanyNameInput fireChangeEvent={formFieldChangeHandlers.handleSetCompany} />
          </Box>
        </Grid>
        <Grid item xs={12} md={12} bgcolor={"cyan"} p={1}>
          <Box p={1}>
            <JobPositionInput fireChangeEvent={formFieldChangeHandlers.handleSetJobPosition} />
          </Box>
        </Grid>
        <Grid item xs={12} md={12} bgcolor={"yellow"} p={1}>
          <Box p={1}>
            <StatusInput fireChangeEvent={formFieldChangeHandlers.handleSetStatus} />
          </Box>
        </Grid>
        <Grid item xs={12} md={12} bgcolor={"yellow"} p={1}>
          <Box p={1}>
            <ApplicationDateInput fireChangeEvent={formFieldChangeHandlers.handleSetDate} />
          </Box>
        </Grid>
        <Grid item xs={12} md={12} bgcolor={"gray"} p={1}>
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
