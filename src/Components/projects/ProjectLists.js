import ProjectSummary from "./ProjectSummary"
import ProjectDetails from "./ProjectDetails";
import { Link } from "react-router-dom";


const ProjectLists = ({projects}) => {
    
    return ( 
        <div className="project-list section m12 " style={{display:'flex',gap:'20px',flexWrap:'wrap'}}> 
        
    {projects && projects.map(project=>{
        return(
            
            <Link   to={"/project/"+ project.id} key={project.id}>
            <ProjectSummary  project={project}  />
            </Link>
            

        )
    })}
       
        </div>
       
     );
}
 
export default ProjectLists;