import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import React, {useState,useEffect} from 'react';
function Content(){
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await fetch('../skills.json');
        console.log(response)
        if(!response.ok){
          throw new error('response not ok');
        }
        const skills = await response.json();
        console.log(skills);
        setData(skills);


      }
      catch(err){
        setError(err.message);
      }
    }
  fetchData();
  }

    ,[]);
  return <>
    <section class=" w-full h-fit">
    <div class="w-full h-full">
    <h2 class="font-acme text-4xl items-center flex pl-[17px] text-white"><FontAwesomeIcon  icon={faTerminal} size="xs"  className='text-[#00f050] w-[36px]'/>Technical Skills</h2>
    <div class="w-full h-fit p-[75px] flex flex-wrap justify-center">
            {data.map((item) => (
            <a class="w-fit h-fit flex justify-center items-center  p-[12px] m-[12px] rounded-md bg-[#ffffff0a] hover:bg-violet-600 cursor-pointer" >
              <img class="w-[22px] h-[22px]" src={item.image}/>
               <h2 class='font-fira font-bold pl-[7px] pr-[13px] text-white text-xs '>{item.name}</h2>
            </a> 

            ))}

    
    </div>

       </div>
    </section>
    </>
}
export default Content;
