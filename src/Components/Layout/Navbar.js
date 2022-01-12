 import {Link} from 'react-router-dom'
import SigninLinks from './SigninLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'

 const Navbar = (props) => {
     const {auth,profile}=props;
     const links=auth.uid? <SigninLinks profile={profile}/>:<SignOutLinks/>;
     return (
          <nav className="nav-wrapper blue darken-3">
              <div className="container">
            <Link to='/' className="brand-logo">MarioPlan</Link>
     {links}
              </div>
          </nav>
           );
 }

 const mapStateToProps=(state)=>{
     

     return{
         auth:state.firebase.auth,
         profile:state.firebase.profile
         
     }
 }
  
 export default connect(mapStateToProps)(Navbar);