import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../App.css';

const skills = () => {

  return (
    <div>
      <Header />
      <div className='title-contact'>
        <p>SKILLS</p>
        <hr />
      </div>
      <Footer />
    </div>
  )
}
export default withRouter(skills);