import React from "react"
import { useState } from "react"
import Game1 from "./Game1";
export default   function Advice(){
    const [game1,setGame1] = useState(false);
    const [advice,setAdvice] = useState(true);
    function next2(){
        setAdvice(false);
        setGame1(true);
        console.log(game1);
      }
    return (
    <div className="advice-contain">
        {advice? <div className="advice">
            <div className="advice-form">
                <h3>คำอธิบาย</h3>
                <p>o เกมนี้เป็นเกมตอบๆถามๆตอบๆนะ </p>
                <p>o คือออ แค่คลิกๆๆอ่านๆๆคิดๆๆกดๆๆ</p>
            </div>
            <button className='nextAdvice' onClick={()=>next2()}>ไปต่อ</button>
           {game1 ? <Game1/> : ""}
    </div>
    : ""}
    
    {game1 ? <Game1/> : ""}
    </div>
    )
}
