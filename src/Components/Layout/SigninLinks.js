import {NavLink} from 'react-router-dom'

const SigninLinks = () => {
    return (
    <ul className="right">
        <li><NavLink to="/create">New project</NavLink></li>
        <li><NavLink to="/">Logout</NavLink></li>
        <li><NavLink to="/" className='btn btn-floating pink lighten-1'>NN</NavLink></li>
    </ul> 
     );
}
 
export default SigninLinks;