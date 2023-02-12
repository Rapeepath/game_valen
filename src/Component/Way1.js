import { style } from "@mui/system";
import React from "react";
import { useState } from "react";
import {useTypewriter,Typewriter} from 'react-simple-typewriter';

export default function Way1(){
    const [anwser1,setAwnser1] = useState(false);
    const [backload,setbackLoad] = useState(false);
    const [way1b,setway1B] = useState(false);
    let [next1,setNext1] = useState(0);
    setTimeout(()=>{
        setAwnser1(true);
    },3800)
    function next(a){
        if(!a){
            document.getElementById("backload-way1").style.opacity="1";
            document.getElementById("backload-way1").style.zIndex="10";
            setTimeout(()=>{
                document.getElementById('Way1-a').style.display="none"
                setbackLoad(true);
                setTimeout(()=>{
                     document.getElementById("backload-way1").style.opacity="0";
                     document.getElementById("backload-way1").style.zIndex="0";
                     setTimeout(setway1B(true),450);

                },750)
                },1600)
        }
    }
    function nextWayb_1(){

    }
    return(
        <div className="way1-contain">
          <div className="backload-way1" id="backload-way1">
            {backload ? <Typewriter words={["7.30 น."]} 
               loop={0}
              typeSpeed={90}
             delaySpeed={10500}/> : ""}
          </div>
          <div className="Way1-a" id="Way1-a">
            {anwser1? <div className="anwser-way1">
                <button onClick={()=>next(true)}>เดืนเล่นแถวที่ดูดาว</button>
                <button onClick={()=>next(false)}>ไม่อะ นอนต่อ</button>
            </div> : ""}
            <div className="text1-way1">
                <Typewriter words={["ไหนๆก็ตื่นเร็วทั้งที หาอะไรทำดีกว่า"]} 
               loop={0}
              typeSpeed={90}
             delaySpeed={10500}/>
         </div>
        </div>
        {way1b ?  <div className="Way1-b" id="Way1-b">
        <div className="text1-way1">
                <Typewriter words={["ไอ้เหี้ยยยย!! ตื่นสาย"]} 
               loop={0}
              typeSpeed={90}
             delaySpeed={10500}/>
         </div>
         <button className="next" onClick={()=>nextWayb_1()}>next</button>
        </div> : ""}
       </div>
      
    )
}