import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Courses from '../../HomeComp/Courses/Courses';
import About from '../../HomeComp/About/About';
import DisplayImages from '../../HomeComp/Display/DisplayImages';

function Home() {

  return (
    <div>
      <DisplayImages />
      <Courses />
      <About />
    </div>
  );
}
export default Home;
