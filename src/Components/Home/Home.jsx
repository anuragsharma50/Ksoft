import React from 'react';
import Images from '../../HomeComp/ImageComp/Images';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Courses from '../../HomeComp/Courses/Courses';
import About from '../../HomeComp/About/About';

function Home() {

  return (
    <div>
      <Images />
      <Courses />
      <About />
    </div>
  );
}
export default Home;
