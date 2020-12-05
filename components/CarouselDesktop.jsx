import React from 'react';
import EasyCook from '../images/Easycook.png';
import datalover from '../images/d-lovers.png';
import RetroBurger from '../images/retroburger.png';
import Comidapt from '../images/comidapt.png';
import mdlinks from '../images/md-links.png';
import cipher from '../images/cipher.png';
import arrow1 from '../images/arrow1.png';
import arrow2 from '../images/arrow2.png';
import '../style/carouselProjects.css';


const CarouselDesktop = () => {
  return (
    <div className="container-carousel my-4 c-desktop">

      <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
        {/* <div className="controls-top">
          <a className="btn-floating" href="#multi-item-example" data-slide="prev"><img src={arrow2} alt='arrow' className="fa fa-chevron-left" /></a>
          <a className="btn-floating" href="#multi-item-example" data-slide="next"><img src={arrow1} alt='arrow' className="fa fa-chevron-right" /></a>
        </div> */}
        <ol className="carousel-indicators">
          <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
          <li data-target="#multi-item-example" data-slide-to="1"></li>
          <li data-target="#multi-item-example" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">

            <div className="row">

              <div className="col-md-4">
                <div className="card mb-2">
                  <a href='https://github.com/xsamynox/SCL014-data-lovers' target="_blank" rel="noreferrer">
                    <img className="card-img-top size-card" src={datalover} alt='project' />
                    <div className="card-body c-color card-color">
                      <h4 className="card-title">Data Lover</h4>
                      <p className="card-text">Inspirado en la data de Pokemon, el reto fue fue conocer la importancia de la Data y saber como manejarla...</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <a href='https://github.com/xsamynox/SCL014-social-network' target="_blank" rel="noreferrer" >
                    <img className="card-img-top size-card" src={EasyCook} alt='project' />
                    <div className="card-body c-color card-color">
                      <h4 className="card-title">EasyCook</h4>
                      <p className="card-text">Es una red social de cocina, dirigida a personas que buscan recetas fáciles, rápidas y de bajo presupuesto...</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <a href='https://github.com/xsamynox/retro-burger-1' target="_blank" rel="noreferrer" >
                    <img className="card-img-top size-card" src={RetroBurger} alt='project' />
                    <div className="card-body c-color card-color">
                      <h4 className="card-title">Retro Burger</h4>
                      <p className="card-text">Retro Burger es un pequeño restaurant 24 horas, ambientado en los años 50's, que ofrece 2 tipos de menú...</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div className="carousel-item">

            <div className="row">
              <div className="col-md-4">
                <div className="card mb-2">
                  <a href='https://github.com/xsamynox/SCL014-cipher' target="_blank" rel="noreferrer" >
                    <img className="card-img-top size-card" src={cipher} alt='project' />
                    <div className="card-body c-color card-color">
                      <h4 className="card-title">Cipher</h4>
                      <p className="card-text">Creación de una plataforma de uso interno para codificar y decoficar mensajes por medio del Cifrado Cesar...</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <a href='https://github.com/xsamynox/comida-para-todos' target="_blank" rel="noreferrer" >
                    <img className="card-img-top size-card" src={Comidapt} alt='project' />
                    <div className="card-body c-color card-color">
                      <h4 className="card-title">Comida Para Todos</h4>
                      <p className="card-text">Rediseño de la plataforma de Comida para Todos...</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <a href='https://github.com/xsamynox/SCL014-md-links' target="_blank" rel="noreferrer" >
                    <img className="card-img-top size-card" src={mdlinks} alt='project' />
                    <div className="card-body c-color card-color">
                      <h4 className="card-title">Md-Links</h4>
                      <p className="card-text">Libreria que lee y analiza archivos MARKDOWN y verifica los links que contengan, reportando estadísticas...</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <a class="carousel-control-prev" href="#multi-item-example" role="button" data-slide="prev">
        <a className="btn-floating" href="#multi-item-example" data-slide="prev"><img src={arrow2} alt='arrow' className="fa fa-chevron-left" /></a>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#multi-item-example" role="button" data-slide="next">
        <a className="btn-floating" href="#multi-item-example" data-slide="next"><img src={arrow1} alt='arrow' className="fa fa-chevron-right" /></a>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
export default CarouselDesktop; 