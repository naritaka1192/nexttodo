"use client"

import { Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const FirstApp = (props:any) =>{

  const [count,setCount]=useState(0)
  const handleClick=()=>{
    setCount((prevCount)=>prevCount +1)
  }

  const [toggle,setToggle]=useState(false)
  const handleToggle=()=>{
    setToggle(!toggle)
  }

  const [text,setText]=useState("")
  const handleChange=(e:any)=>{
    e.preventDefault()
    setText(e.target.value)

    
  }
  
  const [inputText,setInputText]=useState("")
  const handleClick2=()=>{
    setInputText(text)
  }


  return(
  <div>
  {props.id}
  {props.name}
  {props.title}
  <Link href="/">飛んでみる</Link>
  <Image src="/1.png" width={400} height={400} alt="こういう名前" />
  <Button onClick={handleClick}>カウント</Button>
  {count}<br/>
  <Button onClick={handleToggle} >トグルってみる</Button>
  {toggle ? <Image src="/2.jpg" width={400} height={400} alt="更に"/>:<input type="text" onChange={handleChange}/>}
  <br/>
  <Button onClick={handleClick2} >入力する</Button>
  {text}<br/>
  {inputText}
  

  </div>
  )
}

export default FirstApp