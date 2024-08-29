// components/AddItem.js
import { useState } from 'react';
import db from '../utils/firestore';
import { collection, addDoc } from "firebase/firestore"; 

const AddItem = (props) => {
    const [value, setValue] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(value==""){
            const ale=confirm(
                "ちゃんと入力したん？"
                
            )
            if(ale){
                alert("嘘をつけや、出直せ")
                return ;
            }else{
                alert("ちゃんと入力しなっせよ")
                return;
            }
        }
        try {
            const conf=confirm(
                "ええんか？"
            );
            if(conf){
                const docRef = await addDoc(collection(db, "items"), {
                    name: value,                   
                    stime:props.stime,
                    etime:props.etime,
                    chara:props.chara

                });
                alert("インプットしましたよ")
                console.log("Document written with ID: ", docRef.id);
                setValue(''); // Clear the form
            }
            } catch (e) {
                console.error("Error adding document: ", e);
            }
    };

    return (
        <form onSubmit={handleSubmit}>
            人物:{props.chara}
            <br/>
            開始時間:{props.stime}
            <br/>
            終了時間:{props.etime}
            <br/>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add a new item"
            />
            <button type="submit">Add Item</button>


        </form>
    );
};

export default AddItem;
