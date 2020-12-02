import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import CURRICULUM from '../curriculum/CV-Samantha-Moreno.pdf';
import '../style/curriculum.css';

const curriculum = () => {

  return (
    <div>
      <Header />
      <div className='title-contact'>
        <p>CURRICULUM</p>
        <hr />
      </div>
      <div className='container'>
        <p className='quote'>“Vivir no es sólo existir, <br />
        sino existir y crear, <br />
        saber gozar y sufrir <br />
        y no dormir sin soñar. <br />
        Descansar, es empezar a morir”.</p>
        <a className='btn-descarga' href={CURRICULUM} download="Samantha CV (ver. 2.0.1).pdf">Descarga mi CV</a>
      </div>
      <Footer />
    </div>
  )
}
export default withRouter(curriculum);