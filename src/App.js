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
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/contact' exact component={ContactUs}/>
          <Route path='/courses' component={Courses} />
          <Route path='/:courseName' component={Course} />
        </Switch>
        <Footer />
        <Mail />
        <Call />
        <EnquiryBox />
      </Router>
    </div>
  );
}
export default App;
