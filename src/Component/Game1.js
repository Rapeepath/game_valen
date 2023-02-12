import { useEffect, useState } from 'react'; 
import {useTypewriter,Typewriter} from 'react-simple-typewriter';
import Way1 from './Way1';


//import Advice from './Advice';
export default function Game1(){
    let [text,setText] = useState(1);
    const [awnserGame1,setAwnserGame1] = useState(false);
    const [way,setWay] = useState(0);
    function next(){
    //  if(text===1)setText(text++);
      setText(text++);
      setText(text++);
      console.log(text);
      switch (text){
        case 3 :
          console.log('ddd')
          setTimeout(()=>{
            setAwnserGame1(true);
          },700)
        break;
      }
    }

    function nextWay(num){
      document.getElementById('gamesrt1').style.display = "none";
      setWay(num);
    }
    return(
      <div className='gamesrt1-contain'>
      <div className='gamesrt1' id='gamesrt1'>

      {awnserGame1? <div id='awnserGame1'>
          <button className='Game1-awnser-child' onClick={()=>nextWay(1)}>ตื่นตี4ครึ่ง</button>
          <button className='Game1-awnser-child' onClick={()=>nextWay(2)}>ตื่น6โมง</button>
          <button className='Game1-awnser-child' onClick={()=>nextWay(3)}>ตื่น7โมง</button>
        </div> :  ""}
        
        <div className='textGame1'>
        {text ===1 ? <Typewriter words={["ณ 3.58น.หลังจากนอนไม่หลับมา3ขม. ในที่สุดก็หลับลง"]} 
        loop={0}
        typeSpeed={90}
        delaySpeed={10500}/> :""} 

  {text ===2 ? <Typewriter words={["...."]} 
        loop={0}
        typeSpeed={90}
        delaySpeed={10500}/> :""} 

        </div>
        <button className='game1Btn' onClick={()=>next()}>next</button>
      </div>
      {way===1 ? <Way1/> : ""}
      </div>
    )
  }