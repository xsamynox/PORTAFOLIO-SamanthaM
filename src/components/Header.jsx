import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navbar fixed-top fixed-top1 navbar-expand-lg nav-color1">
        <span data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
          aria-expanded="false" aria-label="Toggle navigation" className="iconify menu" data-inline="false"
          data-icon="heroicons-outline:menu"></span>
        <div>
          <a href="https://github.com/xsamynox">
            <span className="iconify rrss" data-inline="false" data-icon="fa-brands:github-square"></span>
          </a>
          <a href="https://www.linkedin.com/in/samantha-moreno-e/">
            <span className="iconify rrss" data-inline="false" data-icon="ion:logo-linkedin"></span>
          </a>
        </div>

        <div className="collapse navbar-collapse color-menu" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="navbar-brand" href="#/" id='home'>Home</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="#/aboutme" id='aboutme'>Sobre mi</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="#/curriculum" id='curriculum'>Curriculum</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="#/skills" id='skills'>Skills</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="#/projects" id='projects'>Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="#/contact" id='contact'>Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;