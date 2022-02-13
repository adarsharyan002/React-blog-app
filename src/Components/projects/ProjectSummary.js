
import './Project.css';

const ProjectSummary = ({project}) => {

    console.log(project);
    return (
         
        <div style={{width:'300px'}} className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span style={{fontSize:'2rem',fontWeight:'250',color:'#EC407A'}} className="card-title">{project.title}</span>
            <p  style={{fontSize:'1.3rem'}}> Posted by {project.FirstName}</p>
            <p className="grey-text">3rd september 2am</p>

        </div>
    </div>

      );
}
 
export default ProjectSummary;