import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from "react";
import AddItem from './AddItem';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import BasicSelect from './selectBox';

const Cld =(props2:any)=>{
  const [sdate, setSdate] = React.useState<Dayjs | null>(dayjs('today'));
  const [edate, setEdate] = React.useState<Dayjs | null>(dayjs('today'));
  const [chara, setChara] = React.useState('太郎');

  const handleChange = (event: SelectChangeEvent) => {
    setChara(event.target.value as string);
  };
  const inputStartdate=dayjs(sdate).format("M/D")
  const inputEnddate=dayjs(edate).format("M/D")

  return(

    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <br/>
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
    </Box>
    <DemoContainer components={['DatePicker', 'DatePicker']}>

      <DatePicker
        label="開始の日"
        value={sdate}
        onChange={(newSValue) => setSdate(newSValue)}
        format='YY/MM/DD'
      />
    </DemoContainer>
    <DemoContainer components={['DatePicker', 'DatePicker']}>
      <DatePicker
        label="終わりの日"
        value={edate}
        onChange={(newEValue) => setEdate(newEValue)}
        format='YY/MM/DD'
      />
    </DemoContainer>
    <AddItem chara={chara} stime={inputStartdate} etime={inputEnddate}/>

  </LocalizationProvider>
  


  )
}

export default Cld