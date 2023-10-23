import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider, createTheme } from '@mui/material';

export default function RadioButtonsGroup({
  children,
  list = [
    { label: 'Standard', value: 'standard' },
    { label: 'Cambridge', value: 'cambridge' },
  ],
  handleChange = () => {},
  isDisabled = false,
}) {
  const theme = createTheme({
    components: {
      // Name of the component
      MuiFormControlLabel: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '3rem',
          },
        },
      },
    },
  });

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={list[0].value}
        name="radio-buttons-group"
        className="flex flex-row"
        onChange={handleChange}
      >
        {list.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
