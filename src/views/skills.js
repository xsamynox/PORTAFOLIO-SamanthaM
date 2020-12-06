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

      <section className='title-second container'>
        <div className='container-tecnicals'>
          <div className='container-icon'>
            <span className="iconify icon-skills" data-inline="false" data-icon="cib:javascript"></span>
            <p>javascript</p>
          </div>
          <div className='container-icon'>
            <span className="iconify icon-skills" data-inline="false" data-icon="bx:bxs-file-html"></span>
            <p>Html</p>
          </div>
          <div className='container-icon'>
            <span className="iconify icon-skills" data-inline="false" data-icon="bx:bxs-file-css"></span>
            <p>Css</p>
          </div>
          <div className='container-icon'>
            <span className="iconify icon-skills" data-inline="false" data-icon="ion:logo-firebase"></span>
            <p>Fibase</p>
          </div>
          <div className='container-icon'>
            <span className="iconify icon-skills" data-inline="false" data-icon="fa-brands:figma"></span>
            <p>Figma</p>
          </div>
          <div className='container-icon'>
            <span className="iconify icon-skills" data-inline="false" data-icon="fa-brands:react"></span>
            <p>React</p>
          </div>
        </div >
      </section>
      <Footer />
    </div >
  )
}
export default withRouter(skills);