import React from 'react';
import ButtonContact from './ButtonContact.jsx';

const ContactForm = () => {

  return (
    <section className="mb-4">

      <div className="row">

        <div className="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label htmlFor="name" className="">Nombre</label>
                  <input type="text" id="name" name="name" className="form-control" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label htmlFor="email" className="">Email</label>
                  <input type="text" id="email" name="email" className="form-control" />
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <label htmlFor="subject" className="">Asunto</label>
                  <input type="text" id="subject" name="subject" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">

              <div className="col-md-12">

                <div className="md-form">
                  <label htmlFor="message">Mensaje</label>
                  <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                </div>

              </div>
            </div>
          </form>

          <div className="text-center text-md-left">
            <ButtonContact className="btn btn-primary" onclick="document.getElementById('contact-form').submit();"></ButtonContact>
          </div>
        </div>


        <div className="container-contact">
          <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
              <p>Santiago de Chile, Chile</p>
            </li>

            <li><i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+ 56 9 50317625</p>
            </li>

            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>xsamynox@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>

    </section>
  )
};
export default ContactForm;