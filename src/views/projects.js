import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CarouselProjects from '../components/CarouselProjects.jsx';

const projects = () => {

  return (
    <div>
      <Header />
      <CarouselProjects />
      <Footer />
    </div>
  )
}
export default withRouter(projects);