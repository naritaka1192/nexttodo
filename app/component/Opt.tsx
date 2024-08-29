"use client"

import {collection,deleteDoc,doc,getDocs,query,updateDoc,where} from "firebase/firestore"
import db from "../utils/firestore";
import { useState } from "react";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import BatteryAlertIcon from '@mui/icons-material/BatteryAlert';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import BuildIcon from '@mui/icons-material/Build';
import BasicSelect from "./selectBox";
import classes from "./comp.module.css"
import { Button } from "@mui/material";

interface Item {
  id: string;
  name: string;
  stime: string;
  etime: string;
  chara: string;
}
const Opt = (props2: any) => {
  const [value, setValue] = useState<Item[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [text, setText] = useState<string>("");

  const handleEdit = (id: string, name: string) => {
    setEditId(id);
    setText(name);
  };
  const handleSave = async(id: string,name: string) => {
    const update = doc(db,"items",id)
    await updateDoc(update,{
      name:text
    })

    setValue((prevValue)=>
      prevValue.map((item)=>
        item.id === id?{...item,name:text}:item,
  )
)
    setEditId(null);
    
  };

  const handleDelete = async(id: string) => {
    await deleteDoc(doc(db, "items", id));
    setValue((prevValue) => prevValue.filter((item) => item.id !== id));
  };


  const handleClick = async () => {
    const q = query(collection(db, "items"), where("chara", "==", props2.name));
    const querySnapshot = await getDocs(q);
    const newData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      stime: doc.data().stime,
      etime: doc.data().etime,
      chara: doc.data().chara
    }));
    console.log(newData);
    setValue(newData);
  };
  return (
    <div>
      <button onClick={handleClick}>firebaseから出す</button><br/>
      <ul>
        {value.map((item) => (
          <li key={item.id}>
            <AccessibilityIcon />{item.chara}　<BatteryAlertIcon />{item.stime}
            　<BedtimeIcon />{item.etime}　

            {editId !== item.id ? (
              <>
                <BuildIcon />内容：{item.name}　
                <Button onClick={() => handleEdit(item.id, item.name)} className={classes.btn2}>編集</Button>
                <Button onClick={()=>handleDelete(item.id)} className={classes.btn}>削除</Button>
              </>
            ) : (
              <>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} className={classes.save} />
                <Button onClick={() => handleSave(item.id,item.name) }className={classes.btn2} >保存</Button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Opt;