import React from 'react';
import Images from '../../HomeComp/ImageComp/Images';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Courses from '../../HomeComp/Courses/Courses';
import Review from '../../HomeComp/Review/Review';

function Home() {

  return (
    <div>
      <Images />
      <Courses />
      <Review />   
    </div>
  );
}
export default Home;
