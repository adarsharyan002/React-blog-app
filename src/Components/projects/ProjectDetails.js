const ProjectDetails = (props) => {
    const id=props.match.params.id;
    return (
        <div className="conatiner section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                <span className="card-title">Project Title-{id}</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex porro recusandae minus, sunt assumenda laudantium sint facere voluptatem quos nostrum.</p>

                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>posted by The Net Ninja</div>
                    <div>2nd</div>
                </div>
                </div>
        </div>
      );
}
 
export default ProjectDetails;