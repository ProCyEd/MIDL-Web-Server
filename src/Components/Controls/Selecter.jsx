import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    select: {
        '&:before': {
            borderColor: 'white',
        },
        '&:after': {
            borderColor: 'white',
        },
        '&:not(.Mui-disabled):hover::before': {
            borderColor: 'white',
        },
    },
    icon: {
        fill: 'white',
    },
    root: {
        color: 'white',
    },
})

export default function BasicSelect({ content }) {
  const [age, setAge] = React.useState('');

  // console.log(options)
  // console.log(name)
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const classes = useStyles()

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{
            color: "white",
            border: "1px solid white"
        }}
        inputProps={{
            classes: {
                icon: classes.icon,
                root: classes.root,
            },
        }}
        >
            {content.map((s, k) => (
                <MenuItem value={k} key={k}>{s}</MenuItem>
            ))}

        </Select>
      </FormControl>
    </Box>
  );
}
