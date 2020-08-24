import React from 'react';
import './App.css';
import EnquiryBox from './Components/EnquiryBox/EnquiryBox';
import Header from './Components/header/header';
import Images from './Components/ImageComp/Images';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Call from './Components/Call/Call';
import Mail from './Components/Mail/Mail';
import Courses from './Components/Courses/Courses';
import Review from './Components/Review/Review';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Images />
      <Courses />
      <Review />

      <Mail />
      <Call />
      <EnquiryBox /> 

      <Footer/>
    </div>
  );
}
export default App;
