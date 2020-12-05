import React from 'react';
import project from '../images/projects.png';
import arrow1 from '../images/arrow1.png';
import arrow2 from '../images/arrow2.png';
import '../style/carouselProjects.css';


const CarouselDesktop = () => {
  return (
    <div className="my-4">

      <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
        <div className="controls-top">
          <a className="btn-floating" href="#multi-item-example" data-slide="prev"><img src={arrow2} alt='arrow' className="fa fa-chevron-left" /></a>
          <a className="btn-floating" href="#multi-item-example" data-slide="next"><img src={arrow1} alt='arrow' className="fa fa-chevron-right" /></a>
        </div>
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
                  <img className="card-img-top size-card" src={project} alt='project' />
                  <div className="card-body card-color">
                    <h4 className="card-title">Data Lovers</h4>
                    <p className="card-text">Creación de una interfaz dinamica que permite visualizar contenido extraido de una data de Pokemón...</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top size-card" src={project} alt='project' />
                  <div className="card-body card-color">
                    <h4 className="card-title">EasyCook</h4>
                    <p className="card-text">Creación de una Red social inspirada en recetas de cocina, implementada con Firebase...</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top size-card" src={project} alt='project' />
                  <div className="card-body card-color">
                    <h4 className="card-title">Retro Burger</h4>
                    <p className="card-text">Creación de una plataforma responsive de uso interno para tomar pedidos de un restaurant y enviar dicha información a cocina, logrando acortar tiempos de espera...</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="carousel-item">

            <div className="row">
              <div className="col-md-4">
                <div className="card mb-2">
                  <img className="card-img-top size-card" src={project} alt='project' />
                  <div className="card-body card-color">
                    <h4 className="card-title">Cipher</h4>
                    <p className="card-text">Creación de una plataforma de uso interno para codificar y decoficar mensajes por medio del Cifrado Cesar...</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top size-card" src={project} alt='project' />
                  <div className="card-body card-color">
                    <h4 className="card-title">Comida Para Todos</h4>
                    <p className="card-text">Rediseño página web: Fundación Comida Para Todos, con el fin de recibir mayor cantidad de aportes, por medio de su propia plataforma...</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top size-card" src={project} alt='project' />
                  <div className="card-body card-color">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="carousel-item">

            <div className="row">
              <div className="col-md-4">
                <div className="card mb-2">
                  <img className="card-img-top size-card" src={project} alt='project' />
                  <div className="card-body card-color">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top size-card" src={project} alt='project' />
                  <div className="card-body card-color">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top size-card" src={project} alt='project' />
                  <div className="card-body card-color">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
export default CarouselDesktop; 