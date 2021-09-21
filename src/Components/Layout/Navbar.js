 import {Link} from 'react-router-dom'
import SigninLinks from './SigninLinks'
import SignOutLinks from './SignOutLinks'

 const Navbar = () => {
     return (
          <nav className="nav-wrapper grey darken-3">
              <div className="container">
            <Link to='/' className="brand-logo">MarioPlan</Link>
      <SigninLinks/>
      <SignOutLinks/>
              </div>
          </nav>
           );
 }
  
 export default Navbar;