import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CarouselProjects from '../components/CarouselProjects.jsx';
import CarouselDesktop from '../components/CarouselDesktop.jsx';
import '../App.css';


const projects = () => {

  return (
    <div>
      <Header />
      <div className='title-contact'>
        <p>PROYECTOS</p>
        <hr />
      </div>
      <CarouselProjects />
      <CarouselDesktop />
      <Footer />
    </div>
  )
}
export default withRouter(projects);