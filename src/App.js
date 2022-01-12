
// import './App.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import SignIn from './Components/auth/Signin';
import SignUp from './Components/auth/Signup';
import Dashboard from './Components/Dashboard/Dashoard';
import Navbar  from './Components/Layout/Navbar';
import CreateProject from './Components/projects/CreateProject';
import ProjectDetails from './Components/projects/ProjectDetails';



function App() {
 
  return (
    <BrowserRouter>
    
    <div className="App">
    <Navbar/>
   <Switch>
     <Route exact path='/' component={Dashboard}/>
     <Route path='/project/:id' component={ProjectDetails}/>
     <Route exact path='/signin' component={SignIn}/>
     <Route exact path='/signup' component={SignUp}/>
     <Route exact path='/create' component={CreateProject}/>

   </Switch>
   </div>

   </BrowserRouter>
    
  );
}

export default App;
