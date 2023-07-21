import React from "react";
import { Box, Grid, Button } from "@mui/material";

function ApplicationInputForm() {
  const saveRecord = event => {
    console.log("Record Needs To Be Saved!!!");
  };

  return (
    <>
      <Grid
        container
        px={2}
        py={2}>
        <Grid item>
          <Box
            mx={1}
            my={1}
            px={1}>
            Something
          </Box>
          <Box
            mx={1}
            my={1}
            px={1}>
            Something
          </Box>
          <Box
            mx={1}
            my={1}
            px={1}>
            <Button
              variant="contained"
              onClick={event => saveRecord(event)}>
              Save
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ApplicationInputForm;
