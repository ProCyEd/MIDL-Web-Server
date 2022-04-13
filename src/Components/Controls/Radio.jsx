import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({ content }) {
  return (
    <FormControl>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="option1"
            name="radio-buttons-group"
        >
            {content.map((o, k) => {
                return <FormControlLabel value={o} control={
                    <Radio 
                        sx={{
                            color: "white",
                        }}
                    />
                } label={o} key={k}/>
            })}
        </RadioGroup>
    </FormControl>
  );
}
