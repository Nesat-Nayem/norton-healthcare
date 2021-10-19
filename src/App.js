import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Contect from "./components/Home/Contect/Contect";
import Home from "./components/Home/Home/Home";
import LocationsDirections from "./components/Home/LocationsDirections/LocationsDirections";
import PatientsVisitors from "./components/Home/PatientsVisitors/PatientsVisitors";
import Service from "./components/Home/Service/Service";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Login from "./components/Shared/Login/Login";
import PrivetRoute from "./components/Shared/Login/PrivetRoute/PrivetRoute";
import Navbar from "./components/Shared/Navbar/Navbar";
import NotFound from "./components/Shared/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <AuthProvider>
      <Router>
      <Navbar></Navbar>
        <Switch>
        
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>


          <Route path="/service">
            <Service></Service>
          </Route>


          <Route path="/LocationsDirections">

            <LocationsDirections></LocationsDirections>
          </Route>


          <Route path="/PatientsVisitors">
           
            <PatientsVisitors></PatientsVisitors>

          </Route>




          <PrivetRoute path="/bookVehicle/:id">
            <ServiceDetail></ServiceDetail>
          </PrivetRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>



    
      </Router>
    </AuthProvider>
  );
}

export default App;
