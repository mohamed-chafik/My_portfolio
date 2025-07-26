import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import projects from '../projects.json';
import React,{useState} from 'react'
function Projects(){
    const [hoveredProject, setHoveredProject] = useState(null);
  return <>
       <section class='w-full h-fit'>
          <h2 class="font-acme text-4xl items-center flex pl-[17px] text-white mb-[20px]"><FontAwesomeIcon  icon={faTerminal} size="xs" class='text-[#00f050] w-[36px]'/>Projects</h2>
         {projects.map((project) => (
          <div class='w-full h-fit flex justify-evenly'>      
      <div class='w-[65%]'>
        <div id ='project' class='text-white border-b-[#3d3d3d] border-b border-solid w-full hover:text-[#00f050]'>
          <div>
            <h1 class='text-6xl font-oswald font-bold '>{project.Name}</h1>
          </div>
          <div>
            <p class='fonr-intel text-[#afafaf]'><ul>
              <li class='flex items-center'><FontAwesomeIcon icon={faCircle} class='w-[6px] mr-[4px] text-[#00f050]'/>React js</li>
            </ul></p>
            <span>
              <a></a>
            </span>
          </div>
        </div>
        </div> 

        <div class='w-[30%] h-fit'>
        <img src={project.Image} class='w-full h-full' alt=""/>
      </div>
      </div>


         ))}  
    </section> 

  </>
}
export default Projects;
