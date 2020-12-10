import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Samantha from '../images/Samantha.png';
import CURRICULUM from '../curriculum/CV-Samantha-Moreno.pdf';
import '../style/contactview.css';

const contact = () => {

  return (
    <div>
      <Header />
      <div className='title-contact'>
        <p>CONTACTAME</p>
        <hr />
      </div>

      <img className='img-sam' src={Samantha} alt='Samantha Moreno' />

      <div className="container-contact container">
        <ul className="list-unstyled mb-0">

          <li><i className="fas fa-map-marker-alt fa-2x" style={{ fontSize: '48px', color: '#ffffff' }}></i>
            <p className='text-contact'>Santiago de Chile, Chile</p>
          </li>
          <li><i className="fas fa-envelope mt-4 fa-2x" style={{ fontSize: '48px', color: '#ffffff' }}></i>
            <p className='text-contact'>xsamynox@gmail.com</p>
          </li>
          <li> <span className="iconify" data-inline="false" data-icon="emojione-v1:trophy" style={{ fontSize: '48px' }}></span>
            <a href='https://app.talento.laboratoria.la/profile/USTRKGOdRea6YvEJSc4bUxfAkmc2'><p className='text-contact'>App Talento laboratoria</p></a>
          </li>
          <li>
            <a className='btn-descarga' href={CURRICULUM} download="Samantha CV (ver. 2.0.1).pdf">Descarga mi CV</a>
          </li>
        </ul>

      </div>

      <Footer />
    </div >
  )
}
export default withRouter(contact);
