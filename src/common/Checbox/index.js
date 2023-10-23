import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CustomCheckbox({ list, handleChange }) {
  return (
    <FormGroup onChange={handleChange} className="flex-row justify-center">
      {list.map((item) => (
        <FormControlLabel
          key={item.id}
          required
          control={<Checkbox />}
          label={item.name}
          value={item.name}
        />
      ))}
    </FormGroup>
  );
}
