import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Button from '../components/Button';
import samantha from '../images/Samantha.png';

const home = () => {

  return (
    <section>
      <header>
        <nav className="navbar fixed-top fixed-top1 navbar-expand-lg nav-color1">
          <span data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
            aria-expanded="false" aria-label="Toggle navigation" className="iconify menu" data-inline="false"
            data-icon="heroicons-outline:menu" />

          <div className="collapse navbar-collapse color-menu" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="navbar-brand" href="/" id='home'>Home</a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="/smoreno/aboutme" id='aboutme'>Sobre mi</a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="/skills" id='skills'>Skills</a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="/projects" id='projects'>Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="/contact" id='contact'>Contacto</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="ctn-body">
        <div className='ctn-title'>
          <h1 className="title">Samantha Moreno</h1>
          <h3 className="sub-title">Front-end Developer</h3>
        </div>
        <div className='ctn-img'>
          <img className='image-sam' src={samantha} alt="Samantha" />
        </div>
        <div className='ctn-img'>
          <Button />
        </div>
      </section>
      <Footer />
    </section>
  )
}
export default withRouter(home);