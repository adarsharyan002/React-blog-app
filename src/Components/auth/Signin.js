import React, { Component } from 'react';
import {signIn} from '../../Store/actions/Signinaction'
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from "react-router-dom"
import {compose} from 'redux';

class SignIn extends Component {
    state = { 
        email:"",
        password:""

     }

     handleChange=(e)=>{
         this.setState({
             [e.target.id]:  e.target.value   
                })
     }
     handleSubmit=(e)=>{
         e.preventDefault();
       
        this.props.SignIn(this.state);
     
    }

    render() { 
        const {authError}=this.props;
        const {projects,auth}=this.props;
        
        if(auth.uid) return <Redirect to='/'/>
        return (

            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                    <div className="red-text center">
                        {authError? <p>{authError}</p>:null}
                    </div>
                </form>
            </div>
          );
    }
}
const mapStateToProps= (state) =>{
   
    return{
       
        auth:state.firebase.auth
    }
    
}

const mapDispatchToProps=(dispatch)=>{
    return{
        SignIn:(creds)=>dispatch(signIn(creds))
    }
}
 
export default compose(connect(mapStateToProps,mapDispatchToProps),firestoreConnect([
    {collection:'Projects'}
]))(SignIn);