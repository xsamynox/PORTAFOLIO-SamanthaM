import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../style/skills.css';

const skills = () => {

  return (
    <div>
      <Header />
      <div className='title-contact'>
        <p>SKILLS</p>
        <hr />
      </div>
      <div className='title-second'>
        <p>TÉCNICAS</p>
        <hr />
      </div>

      <section className='title-second '>
        <div className='container-tecnicals'>
          <div className='container-icon'>
            <span class="iconify" data-inline="false" data-icon="cib:javascript" style={{ color: '#4b8e92', fontSize: '35px' }}></span>
            <p>javascript</p>
          </div>
          <div className='container-icon'>
            <span class="iconify" data-inline="false" data-icon="bx:bxs-file-html" style={{ color: '#4b8e92', fontSize: '35px' }}></span>
            <p>Html</p>
          </div>
          <div className='container-icon'>
            <span class="iconify" data-inline="false" data-icon="bx:bxs-file-css" style={{ color: '#4b8e92', fontSize: '35px' }}></span>
            <p>Css</p>
          </div>
        </div>
        <div className='container-tecnicals'>
          <div className='container-icon'>
            <span class="iconify" data-inline="false" data-icon="ion:logo-firebase" style={{ color: '#4b8e92', fontSize: '35px' }}></span>
            <p>Fibase</p>
          </div>
          <div className='container-icon'>
            <span class="iconify" data-inline="false" data-icon="fa-brands:figma" style={{ color: '#4b8e92', fontSize: '35px' }}></span>
            <p>Figma</p>
          </div>
          <div className='container-icon'>
            <span class="iconify" data-inline="false" data-icon="fa-brands:react" style={{ color: '#4b8e92', fontSize: '35px' }}></span>
            <p>React</p>
          </div>
        </div>
      </section>
      <Footer />
    </div >
  )
}
export default withRouter(skills);