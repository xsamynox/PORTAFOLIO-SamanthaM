import React from 'react';

const Footer = () => {
  return (
    <footer style={{ display: "flex" }}>
      <div>
        <h1 className="title1">Samantha Moreno</h1>
        <h3 className="sub-title1">Front-end Developer</h3>
      </div>
      <div>
        <a href="https://github.com/xsamynox">
          <span className="iconify rrss" data-inline="false" data-icon="fa-brands:github-square"></span>
        </a>
        <a href="https://www.linkedin.com/in/samantha-moreno-e/">
          <span className="iconify rrss" data-inline="false" data-icon="ion:logo-linkedin"></span>
        </a>
      </div>

    </footer>
  );
}
export default Footer;
