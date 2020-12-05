import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Samantha from '../images/Samantha.png';
import ContactForm from '../components/ContactForm.jsx';
import '../style/contactview.css';


const contact = () => {

  return (
    <div>
      <Header />
      <div className='title-contact'>
        <p>CONTACTAME</p>
        <hr />
      </div>
      <p className='text-contact1'>¿Tienes alguna pregunta? No dudes en contactarme directamente.</p>

      <img className='img-sam' src={Samantha} alt='Samantha Moreno' />

      <section className='contact container'>
        <ContactForm />
      </section>
      <Footer />
    </div >
  )
}
export default withRouter(contact);