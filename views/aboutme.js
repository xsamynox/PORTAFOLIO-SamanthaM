import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import read from '../images/read.png';
import write from '../images/write.png';
import camping from '../images/camping.png';
import design from '../images/design.png';
import '../style/aboutme.css';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const AboutMe = () => {

  const [popoverReadOpen, setPopoverOpen] = useState(false);
  const togglePopUpRead = () => setPopoverOpen(!popoverReadOpen);

  const [popoverWriteOpen, setPopoverWriteOpen] = useState(false);
  const togglePopUpWrite = () => setPopoverWriteOpen(!popoverWriteOpen);

  const [popoverCampingOpen, setPopoverCampingOpen] = useState(false);
  const togglePopUpCamping = () => setPopoverCampingOpen(!popoverCampingOpen);

  const [popoverDesignOpen, setPopoverDesignOpen] = useState(false);
  const togglePopUpDesign = () => setPopoverDesignOpen(!popoverDesignOpen);

  return (
    <div>
      <Header />
      <div className='title-contact'>
        <p>SOBRE MI</p>
        <hr />
      </div>
      <section className='container'>
        <p className='text-contact'>
          {/* Venezolana viviendo en Santigo de Chile. */}
          {/* <span className="iconify" data-inline="false" data-icon="emojione:flag-for-venezuela" style={{ fontSize: '40px' }}></span>
          <span className="iconify" data-inline="false" data-icon="emojione:flag-for-chile" style={{ fontSize: '40px' }}></span> */}
          Desarrolladora web, en constante aprendizaje y búsqueda de nuevas tecnologías, con la capacidad de asumir y adaptarme a nuevos desafíos y a trabajar en equipo.</p>
        <div className='title-hobbie'>
          <p>PASATIEMPOS</p>
          <hr />
        </div>

        <div className='ctn-hobbies'>
          <img id="PopoverRead" className='hobbies' src={read} alt='read' />
          <Popover placement="bottom" isOpen={popoverReadOpen} target="PopoverRead" toggle={togglePopUpRead}>
            <PopoverHeader>Leer</PopoverHeader>
            <PopoverBody>Apesar de que de hace un tiempo no lo hago tan frecuente como me gustaría, leer me relaja, de hace soñar y pensar en infinitas posibilidades.</PopoverBody>
          </Popover>
          <img id="PopoverWrite" className='hobbies' src={write} alt='write' />
          <Popover placement="bottom" isOpen={popoverWriteOpen} target="PopoverWrite" toggle={togglePopUpWrite}>
            <PopoverHeader>Escribir</PopoverHeader>
            <PopoverBody>Escribir es parte de mi, me sirve para hacer catarsis y para expresar cosas que no siempre quiero o se decir.</PopoverBody>
          </Popover>
          <img id='PopoverCamping' className='hobbies' src={camping} alt='camping' />
          <Popover placement="bottom" isOpen={popoverCampingOpen} target="PopoverCamping" toggle={togglePopUpCamping}>
            <PopoverHeader>Acampar</PopoverHeader>
            <PopoverBody>Conectar con la naturaleza, con el rocio mañanero, con las estrellas, despejar, siempre es necesario y es una de las cosas que más amo.</PopoverBody>
          </Popover>
          <img id='PopoverDesign' className='hobbies' src={design} alt='design' />
          <Popover placement="bottom" isOpen={popoverDesignOpen} target="PopoverDesign" toggle={togglePopUpDesign}>
            <PopoverHeader>Diseñar</PopoverHeader>
            <PopoverBody>El arte de crear algo es fabuloso, por esa razón disfruto mucho hacer cosas con mis propias manos, coser, diseñar, dibujar, crear una página desde cero o modificarla!</PopoverBody>
          </Popover>
        </div>
      </section>
      <Footer />
    </div >
  )
}
export default withRouter(AboutMe);