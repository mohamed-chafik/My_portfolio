import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import projects from '../projects.json';
import React,{useState} from 'react'
function Projects(){
    const [hoveredProject, setHoveredProject] = useState(null);
  return <>
         <section className='w-full h-fit'>
      <h2 className="font-acme text-4xl items-center flex pl-[17px] text-white mb-[20px]">
        <FontAwesomeIcon icon={faTerminal} size="xs" className='text-[#00f050] w-[36px]'/>
        Projects
      </h2>
      
      {/* Image preview container (fixed position) */}
      <div className='w-full flex'>
        <div className='w-[65%]'>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className='w-full h-fit mb-8'
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className={`text-white border-b-[#3d3d3d] border-b border-solid w-full pb-4 ${
                  hoveredProject === project.id ? 'text-[#00f050]' : ''
                }`}
              >
                <div>
                  <h1 className='text-6xl font-oswald font-bold hover:text-[#00f050]'>{project.Name}</h1>
                </div>
                <div>
                  <ul className='flex flex-wrap mt-2'>
                    {project.stack.map((tech, index) => (
                      <li key={index} className='flex items-center mr-5 mb-1'>
                        <FontAwesomeIcon 
                          icon={faCircle} 
                          className='w-[6px] mr-[4px] text-[#00f050]'
                        />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image container (fixed position) */}
        <div className='w-[30%] sticky top-4 h-fit self-start'>
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`transition-all duration-300 ${
                hoveredProject === project.id ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <img 
                src={project.image} 
                className='w-full h-auto max-h-[400px] object-cover rounded-xl ml-[40px]' 
                alt={`${project.Name} project preview`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>  </>
}
export default Projects;
