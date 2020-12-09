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


      <section className='container'>
        <div className='container-tecnicals'>
          <div className='container-icon'>
            <span className="iconify icon-skills" data-inline="false" data-icon="cib:javascript" />
            <p>javascript</p>
          </div>
          <div className='container-icon'>
            <span className="iconify icon-skills" data-inline="false" data-icon="bx:bxs-file-html" />
            <p>Html</p>
          </div>
          <div className='container-icon'>
            <span className="iconify icon-skills" data-inline="false" data-icon="bx:bxs-file-css" />
            <p>Css</p>
          </div>
          <div className='container-icon'>
            <span className="iconify icon-skills" data-inline="false" data-icon="ion:logo-firebase" />
            <p>Fibase</p>
          </div>
          <div className='container-icon'>
            <span className="iconify icon-skills" data-inline="false" data-icon="fa-brands:figma" />
            <p>Figma</p>
          </div>
          <div className='container-icon'>
            <span className="iconify icon-skills" data-inline="false" data-icon="fa-brands:react" />
            <p>React</p>
          </div>
          <div className='container-icon'>
            <span class="iconify icon-skills" data-inline="false" data-icon="ant-design:github-filled" />
            <p>Github</p>
          </div>
          <div className='container-icon'>
            <span class="iconify icon-skills" data-inline="false" data-icon="cib:git" />
            <p>Git</p>
          </div>
        </div >
      </section>
      <Footer />
    </div >
  )
}
export default withRouter(skills);