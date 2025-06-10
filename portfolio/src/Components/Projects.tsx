import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

// Projects component definition
const Projects=()=>{
    // Render projects section with title and project cards
    return (
        <div className="px-16  my-10 font-mono md-mx:px-6" id="Projects">
            {/* Section title */}
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl text-center mb-10 font-bold text-white"><span className="text-primaryColor">02.&nbsp;</span>Projects</h1>
            {/* Container for project cards */}
            <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
                {
                    // Map through ProjectInfo and render a ProjectCard for each project
                    ProjectInfo.map((project:any, index:number)=><ProjectCard key={index} title={project.title} desc={project.desc} image={project.image} live={project.live} link={project.link} github={project.github} technologies={project.technologies} />)
                }
            </div>
        </div>
    )
}
// Exporting Projects component as default
export default Projects;