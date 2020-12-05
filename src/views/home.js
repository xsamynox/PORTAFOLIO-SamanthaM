import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Button from '../components/Button';
import samantha from '../images/Samantha.png';
import Header from '../components/Header';

const home = () => {

  return (
    <section>
      <Header />

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