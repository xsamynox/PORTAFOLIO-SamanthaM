import React from 'react';
import Sami from '../images/Samantha.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar fixed-top fixed-top1 navbar-expand-lg nav-color1">
        <span data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
          aria-expanded="false" aria-label="Toggle navigation" className="iconify menu" data-inline="false"
          data-icon="heroicons-outline:menu" />

        <div>
          <img src={Sami} alt='Samantha' className='img-header' />
        </div>

        <div className="collapse navbar-collapse color-menu" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="navbar-brand" href="/" id='home'>Home</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="/aboutme" id='aboutme'>Sobre mi</a>
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
  );
}
export default Header;