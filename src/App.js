import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Shared/Navbar/Navbar';
import Login from './components/Shared/Login/Login';



function App() {
  return (
    <div className="App">
     <Router>
       <Navbar></Navbar>
       <Switch>
          <Route path="/Login">
           
          <Login></Login>
             
          </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
