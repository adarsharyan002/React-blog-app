import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux';

const ProjectDetails = (props) => {
    const id=props.match.params.id;
    console.log(props)

    const {project}=props;
   
    return (
        <div className="conatiner section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                <span className="card-title">{project.title}-{id}</span>
                <p>{project.content}</p>

                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>posted by {project.FirstName}</div>
                    <div>2nd</div>
                </div>
                </div>
        </div>
      );
    }
    const mapStateToProps= (state,ownprops) =>{
        const id=ownprops.match.params.id;
        console.log(state);
      const  projects= state.firestore.data.Projects;
      const project=projects ? projects[id] : null
        return{
            project:project
           
        }
        
    }
 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'Projects'}
    ])) (ProjectDetails);