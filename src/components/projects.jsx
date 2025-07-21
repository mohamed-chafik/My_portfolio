import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
function Projects(){
  return <>
       <section class='w-full h-[100vh]'>
          <h2 class="font-acme text-4xl items-center flex pl-[17px] text-white"><FontAwesomeIcon  icon={faTerminal} size="xs"/>Technical Skills</h2>
        <div class='text-white border-b-[#3d3d3d] border-b border-solid'>
          <div>
            <h1 class='text-6xl'>Projet Number 1</h1>
          </div>
          <div>
            <p>the description of the project number 1</p>
            <span>
              <a></a>
            </span>
          </div>
        </div>
        </section> 

  </>
}
export default Projects;
