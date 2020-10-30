import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Header from './HomeComp/header/header'
import Footer from './HomeComp/Footer/Footer';
import Course from './Components/CoursePage/Course';
import Mail from './HomeComp/Mail/Mail';
import Call from './HomeComp/Call/Call';
import EnquiryBox from './HomeComp/EnquiryBox/EnquiryBox';
import ContactUs from './Components/ContactUs/ContactUs';
import Courses from './HomeComp/Courses/Courses';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import About from './HomeComp/About/About';
import Whatsapp from './HomeComp/Whatsapp/Whatsapp';
import Offer from './Components/Offer/Offer';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/contact' exact component={ContactUs}/>
          <Route path='/courses' component={Courses} />
          <Route path='/about' component={About} />
          {/* <Route path='/Festival-offer' component={Offer} /> */}
          <Route path='/:courseName' component={Course} />
          <Redirect to='/' />
        </Switch>
        <Footer />
        <Mail />
        <Call />
        <EnquiryBox />
        <Whatsapp />
      </Router>
    </div>
  );
}
export default App;
