import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
function Content(){
  return <>
    <section class="bg-[#ffffee] w-full h-[100vh]">
    <div class="w-full h-full">
    <h2 class="font-acme text-4xl items-center flex pl-[17px]"><FontAwesomeIcon  icon={faTerminal} size="xs"/>Technical Skills</h2>
    <div class="w-full h-[80vh] p-[75px] flex">
    <div class="w-fit h-fit flex justify-center items-center  p-[12px] rounded-xl">
            <img class="w-[36px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"/>
            <h2>React Js</h2>
    </div> 
    <div class="w-fit h-fit flex justify-center items-center  p-[12px] rounded-xl">
            <img class="w-[36px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"/>
            <h2>React Js</h2>
    </div> 
    </div>
    </div>
    </section>
    </>
}
export default Content;
