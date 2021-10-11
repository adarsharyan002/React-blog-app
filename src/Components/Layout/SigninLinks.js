
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import {signOut} from '../../Store/actions/Signinaction'

const SigninLinks = (props) => {
    const {profile}=props;
    
    return (
    <ul className="right">
        <li><NavLink to="/create">New project</NavLink></li>
        <li><a onClick={props.signOut}>LogOut</a></li>
        <li><NavLink to="/" className='btn btn-floating pink lighten-1'>{profile.initials}</NavLink></li>
    </ul> 
     );
}

const mapDispatchToProps=(dispatch)=>{
    return {
        signOut:()=>dispatch(signOut())
    }
}
 
export default connect(null,mapDispatchToProps)(SigninLinks);