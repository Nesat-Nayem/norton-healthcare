import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./components/Home/Home/Home";
import LocationsDirections from "./components/Home/LocationsDirections/LocationsDirections";
import AdvancedTechnologies from "./components/Home/AdvancedTechnologies/AdvancedTechnologies";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Footer from "./components/Shared/Footer/Footer";
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

          <Route path="/LocationsDirections">
            <LocationsDirections></LocationsDirections>
          </Route>


          <Route path="/AdvancedTechnologies">
            <AdvancedTechnologies></AdvancedTechnologies>
          </Route>

          <PrivetRoute path="/servicesdetails/:id">
            <ServiceDetail></ServiceDetail>
          </PrivetRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
        
      </Router>
    </AuthProvider>
  );
}

export default App;
