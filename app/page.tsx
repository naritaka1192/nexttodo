"use client"

import Image from "next/image";
import Link from "next/link";
import AddItem from "./component/AddItem";

export default function Home() {

  const id="1"
  return (
   <div>
    <Link href={id}>どうした</Link>
   </div>
  );
}
