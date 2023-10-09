// Imports route
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header"
import Home from "./pages/home"
import Footer from './component/footer';
import './css/footer.css'
function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact element={Home}/>
        <Route path="/Products"/>
        <Route path="/AboutUs"/>
        <Route path="/Booking"/>
        <Route path="/Login"/>
        <Route path="/YourAccount"/>
        <Route path="/Admin"/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
