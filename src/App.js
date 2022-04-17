
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

import PageNotFound from './Pages/PageNotFound';
import AuthProvider from './contexts/AuthProvider';
import Footer from './Components/Footer/Footer';
import Booking from './Components/Booking/Booking';
import Services from './Components/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Doctors from './Components/Doctors/Doctors';
import FacilitiesAmenities from './Pages/FacilitiesAmenities';



function App() {
  return (

    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path ="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/facilities">
              <FacilitiesAmenities></FacilitiesAmenities>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
