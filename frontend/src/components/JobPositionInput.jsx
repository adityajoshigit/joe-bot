import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { ApplicationFormContext } from "../context/ApplicationFormContext";

const filter = createFilterOptions();

function JobPositionInput(props) {
  const { jobPositionList, setJobPosition } = React.useContext(
    ApplicationFormContext
  );

  const [value, setValue] = React.useState(null);

  const onChange = (event, newValue) => {
    if (typeof newValue === "string") {
      setJobPosition({
        title: newValue,
      });
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setJobPosition({
        ...newValue,
      });
    } else {
      setJobPosition(newValue);
    }
  };

  const filterOptions = (options, params) => {
    const filtered = filter(options, params);

    const { inputValue } = params;
    // Suggest the creation of a new value
    const isExisting = options.some((option) => inputValue === option.title);
    if (inputValue !== "" && !isExisting) {
      filtered.push({
        inputValue,
        title: `Add "${inputValue}"`,
        id: "___",
      });
    }

    return filtered;
  };

  const getOptionLabel = (option) => {
    // Value selected with enter, right from the input
    if (typeof option === "string") {
      return option;
    }
    // Add "xxx" option created dynamically
    if (option.inputValue) {
      return option.inputValue;
    }
    // Regular option
    return option.title;
  };

  const renderOption = (props, option) => {
    return <li {...props}>{option.title}</li>;
  };

  const renderInput = (params) => (
    <TextField
      {...params}
      sx={{ width: "100%", minHeight: "3.5rem" }}
      label="What job position did you apply for?"
    />
  );

  return (
    jobPositionList && (
      <Autocomplete
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        freeSolo
        id="jobPositionNameSelectList"
        onChange={(event, newValue) => onChange(event, newValue)}
        filterOptions={(options, params) => filterOptions(options, params)}
        options={jobPositionList}
        getOptionLabel={(option) => getOptionLabel(option)}
        renderOption={(props, option) => renderOption(props, option)}
        renderInput={(params) => renderInput(params)}
      />
    )
  );
}

export default JobPositionInput;
