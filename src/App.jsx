// Imports route
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Footer from './component/footer';
import Home from "./pages/home";
import Booking from "./pages/booking";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/app.css";
import './css/footer.css'

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact element={Home}/>
        <Route path="/Products"/>
        <Route path="/AboutUs"/>
        <Route path="/Booking" exact element={<Booking />}/>
        <Route path="/Login"/>
        <Route path="/YourAccount"/>
        <Route path="/Admin"/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
