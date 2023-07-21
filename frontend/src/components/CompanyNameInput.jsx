import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

function CompanyNameInput() {


  const [value, setValue] = React.useState(null);

  const onChange = (event, newValue) => {
    if (typeof newValue === 'string') {
      setValue({
        title: newValue,
      });
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setValue({
        title: newValue.inputValue,
      });
    } else {
      setValue(newValue);
    }
  };

  const filterOptions = (options, params) => {
    const filtered = filter(options, params);

    const { inputValue } = params;
    // Suggest the creation of a new value
    const isExisting = options.some((option) => inputValue === option.title);
    if (inputValue !== '' && !isExisting) {
      filtered.push({
        inputValue,
        title: `Add "${inputValue}"`,
      });
    }

    return filtered;
  };

  const getOptionLabel = (option) => {
    // Value selected with enter, right from the input
    if (typeof option === 'string') {
      return option;
    }
    // Add "xxx" option created dynamically
    if (option.inputValue) {
      return option.inputValue;
    }
    // Regular option
    return option.title;
  };

  const renderOption = (props, option) => <li {...props}>{option.title}</li>;

  const renderInput = (params) => (
    <TextField {...params} label="Free solo with text demo" />
  );

  return (
    <Autocomplete
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      freeSolo
      id="companyNameSelectList"
      value={value}
      onChange={(event, newValue) => onChange(event, newValue)}
      filterOptions={(options, params) => filterOptions(options, params)}
      options={top100Films}
      getOptionLabel={(option) => getOptionLabel(option)}
      renderOption={(props, option) => renderOption(props, option)}
      sx={{ width: 300 }}
      renderInput={(params) => renderInput(params)}
    />
  );

}

export default CompanyNameInput;