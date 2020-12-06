import React from 'react';
import datalover from '../images/d-lovers.png';
import EasyCook from '../images/Easycook.png';
import RetroBurger from '../images/retroburger.png';
import Comidapt from '../images/comidapt.png';
import mdlinks from '../images/md-links.png';
import cipher from '../images/cipher.png';
import arrow1 from '../images/arrow1.png';
import arrow2 from '../images/arrow2.png';
import '../style/carouselProjects.css';


const CarouselProjects = () => {
  return (
    <div className="bd-example c-mobile">
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href='https://github.com/xsamynox/SCL014-data-lovers' target="_blank" rel="noreferrer">
              <img src={datalover} className="d-block w-100 img-carousel" alt="Proyecto Data Lovers" />
              <div className="carousel-caption d-md-block">
                <h5>Data Lover</h5>
                <p>Inspirado en la data de Pokemon, el reto fue fue conocer la importancia de la Data y saber como manejarla...</p>
              </div>
            </a>
          </div>
          <div className="carousel-item">
            <a href='https://github.com/xsamynox/SCL014-social-network' target="_blank" rel="noreferrer" >
              <img src={EasyCook} className="d-block w-100 img-carousel" alt="Proyecto Easycook" />
              <div className="carousel-caption d-md-block">
                <h5>EasyCook</h5>
                <p>Es una red social de cocina, dirigida a personas que buscan recetas fáciles, rápidas y de bajo presupuesto...</p>
              </div>
            </a>
          </div>
          <div className="carousel-item">
            <a href='https://github.com/xsamynox/retro-burger-1' target="_blank" rel="noreferrer" >
              <img src={RetroBurger} className="d-block w-100 img-carousel" alt="Proyecto RetroBurger" />
              <div className="carousel-caption d-md-block">
                <h5>Retro Burger</h5>
                <p>Retro Burger es un pequeño restaurant 24 horas, ambientado en los años 50's, que ofrece 2 tipos de menú... </p>
              </div>
            </a>
          </div>
          <div className="carousel-item">
            <a href='https://github.com/xsamynox/SCL014-cipher' target="_blank" rel="noreferrer" >
              <img src={cipher} className="d-block w-100 img-carousel" alt="Proyecto Cipher" />
              <div className="carousel-caption d-md-block">
                <h5>Cipher</h5>
                <p>Creación de una plataforma para codificar y decoficar mensajes por medio del Cifrado Cesar...</p>
              </div>
            </a>
          </div>
          <div className="carousel-item">
            <a href='https://github.com/xsamynox/comida-para-todos' target="_blank" rel="noreferrer" >
              <img src={Comidapt} className="d-block w-100 img-carousel" alt="Proyecto Comida Para Todos" />
              <div className="carousel-caption d-md-block">
                <h5>Comida para todos</h5>
                <p>Rediseño de la plataforma de Comida para Todos, de una landing page a una web completa... </p>
              </div>
            </a>
          </div>
          <div className="carousel-item">
            <a href='https://github.com/xsamynox/SCL014-md-links' target="_blank" rel="noreferrer" >
              <img src={mdlinks} className="d-block w-100 img-carousel" alt="Proyecto Md-links" />
              <div className="carousel-caption d-md-block">
                <h5>Md-Links</h5>
                <p>Libreria que lee y analiza archivos MARKDOWN y verifica los links que contengan, reportando estadísticas...</p>
              </div>
            </a>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <a className="btn-floating" href="#multi-item-example" data-slide="prev"><img src={arrow2} alt='arrow' className="fa fa-chevron-left" /></a>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <a className="btn-floating" href="#multi-item-example" data-slide="next"><img src={arrow1} alt='arrow' className="fa fa-chevron-right" /></a>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
export default CarouselProjects;

