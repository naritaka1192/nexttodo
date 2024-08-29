"use client"

import Link from "next/link";
import classes from "./par.module.css"
import Image from "next/image";
import AddItem from '../component/AddItem'
// import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import React from "react";
import Cld from "../component/calenderAdd";
import Opt from "../component/Opt";
import BasicSelect from "../component/selectBox";
import { useState } from "react";
import { Button } from "@mui/material";

interface Params{
  id:string;
}

const lists=[
  {
    id:"1",
    text:"その１どす",
    img:"/1.png"
  },
  {
    id:"2",
    text:"その２ですわ",
    img:"/2.jpg"
  }
]




export default function Home({params}:{params:Params}){
  // const [sdate, setSdate] = React.useState<Dayjs | null>(dayjs('today'));
  // const inputStartdate=dayjs(sdate).format("M/D")

  const [count,setCount]=useState(0)
  const [text,setText]=useState("")
  const handleChange=(e:any)=>{
    e.preventDefault
    setText(e.target.value)
  }

  const [inputText,setInputText]=useState("")

  const handleClick=()=>{
    setCount((prevCount:any)=>prevCount+1)
  }

  const handleClick2=()=>{
    setInputText(text)
  }

  const{id}=params;
  const result = lists.find((ans)=>ans.id===id);
  return(
    <div className={classes.tess}>
    <h1>Hello,{id}</h1>
    <button onClick={handleClick}>押してちょ</button>
    {count}
    <h1>{result?.text}</h1>
    <Link href="/" className={classes.lk}>【戻る】</Link>
    {result?.img && (
    <Image src={result.img} width={200} height={200} alt="ddd" />
  )}
  <input type="text" onChange={handleChange} />
  <Button onClick={handleClick2} >押すと・・・</Button>
  {inputText}

  {/* <Button onClick={handleClick2} >押せ</Button> */}
 
  <p></p>
  {id=="2" && <BasicSelect/> }
  {/* {id=="1" && < AddItem time={inputStartdate}/>} */}
  {id=="1" &&  <Cld/>}
  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label="日にちカレンダー"
          value={sdate}
          onChange={(newValue) => setSdate(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider> */}
    </div>
    
  )
}