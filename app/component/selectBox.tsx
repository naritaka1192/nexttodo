import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AddItem from './AddItem';
import Cld from './calenderAdd';
import Opt from './Opt';

export default function BasicSelect() {
  const [chara, setChara] = React.useState('太郎');

  const handleChange = (event: SelectChangeEvent) => {
    setChara(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">キャラクター</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chara}
          label="People"
          onChange={handleChange}
        >
          <MenuItem value={"太郎"}>太郎</MenuItem>
          <MenuItem value={"二郎"}>二郎</MenuItem>
          <MenuItem value={"三郎"}>三郎</MenuItem>
        </Select>
      </FormControl>
      < Opt name={chara}/>
    </Box>
  );
}
