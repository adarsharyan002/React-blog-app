import React, { Component } from 'react';
import ProjectLists from '../projects/ProjectLists';
import Notification from './Notification';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux';
import {Redirect} from "react-router-dom"
class Dashboard  extends Component {
    
    
    render() { 
        const {projects,auth}=this.props;
        
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="dashboard container m12">
                <div style={{display:"flex"}} className="row m12">
                    <div style={{display:"flex"}} className="col s12 m12"><ProjectLists projects={projects}/></div>
                    
                </div>
            </div>
          )
    }
}

const mapStateToProps= (state) =>{
    
    return{
        projects: state.firestore.ordered.Projects,
        auth:state.firebase.auth
    }
    
}
 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'Projects'}
    ]))(Dashboard) 

// export default  connect(mapStateToProps)(Dashboard) ;