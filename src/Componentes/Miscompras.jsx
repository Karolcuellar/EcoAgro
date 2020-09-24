import React from 'react';
import '../Estilos/Miscompras.css';
import carrusel1 from '../Imagenes/carrusel1.png';
import carrusel2 from '../Imagenes/carrusel2.png';
import carrusel3 from '../Imagenes/carrusel3.png';
import FRUTA1 from '../Imagenes/FRUTA1.png';
import FRUTA2 from '../Imagenes/FRUTA2.png';
import FRUTA3 from '../Imagenes/FRUTA3.png';
import FRUTA4 from '../Imagenes/FRUTA4.png';
import ECOAGRODEFINITIVO1 from '../Imagenes/ECOAGRODEFINITIVO1.png';
function Miscompras() {

    return (
      <div className="App">
      <div ClasName="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand"><img src={ECOAGRODEFINITIVO1} className="img-fluid" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="">Casa <span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a class="nav-link" href="#">Transportador</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Conocenos</a>
        </li>
        
        <li className="nav-item active">
          <a className="nav-link  " href="#">¿No te haz registrado aún?</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link  " href="#">Quienes somos</a>
        </li>
       
        <a type="button" className="btn1 btn-info1"></a>
        <button type="button" className="btn btn-info" >Ingresar</button>
        <li className="nav-item active">
       
        </li>
      </ul>
    </div>
  </nav>
      </div>
      
  
  
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
     
      <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
  
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={carrusel1} className="d-block w-100" alt="..."/>
        </div>
      <div className="carousel-item">
        <img src={carrusel2} className="d-block w-100" alt="..."/>
        
        </div>
      <div className="carousel-item">
        <img src={carrusel3} className="d-block w-100" alt="..."/>
        
        </div>
        </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  
  </div>
<br></br>
<br></br>
<h1 className="Titulito">
    Agradecemos su apoyo al campo Colombiano
</h1>
<div className="CAP FONDO">
<div class="card-columns">
  <div class="card">
    <img src={FRUTA4} class="card-img-top img-fluid" alt="..."/>
    <div class="card-body2">
      <h5 class="card-title TI">Guayaba</h5>
      <p class="card-text" className="sinConfirmar">Producto por confirmar</p>
    </div>
  </div>
  <div class="card p-3">
    <blockquote class="blockquote mb-0 card-body3">
      <p>Conocenos y explora EcoAgro.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
        Familia<cite title="Source Title">EcoAgro</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img src={FRUTA3} class="card-img-top img-fluid" alt="..."/>
    <div class="card-body4">
      <h5 class="card-title TI">Sandia</h5>
      <p class="card-text" className="Confirmado">Producto confirmado</p>
      <p class="card-text"><small class="text-muted">Tarde 3 Minutos tarde</small></p>
    </div>
  </div>
  <div class="card bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p>Confirma tus productos una vez entregados para tener confianza de la entrega a tiempo de tus productos.</p>
      <footer class="blockquote-footer text-white">
        <small>
          Familia<cite title="Source Title">EcoAgro</cite>
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card text-center">
    <div class="card-body5">
    </div>
  </div>
  <div class="card">
    <img src={FRUTA2} class="card-img-top img-fluid" alt="..."/>
  </div>
  <div class="card p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p className="TI">Durazno:</p>
      <footer class="blockquote-footer">
 <p class="card-text" className="Confirmado">Producto confirmado</p>
      </footer>
    </blockquote>
  </div>
  <div class="card DIS">
    <div class="card-body1">
      <h5 class="card-title ">Sequimiento de productos</h5>
      <p class="card-text">Ten confianza de que tus productos llegaran a tiempo a través de nuestro segumiento de productos a tiempo y con la calidad y estados prometidos.</p>
      <p class="card-text"><small class="text-muted">Tarde 3 Minutos tarde</small></p>
    </div>
  </div>
</div>
</div>
<h1 className="Titulito">
<div class="shadow p-3 mb-5 bg-white rounded">Seguimiento de pedidos</div>
</h1>
<div className="CAR">
<p>
  <a class="btn btn-primary p-3 mb-2 bg-info text-white" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element<img src="..." alt="..." class="img-thumbnail"></img></a>
  <button class="btn btn-primary p-3 mb-2 bg-info text-white" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn btn-primary p-3 mb-2 bg-info text-white" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        <img src="https://static.nationalgeographic.es/files/styles/image_3200/public/dominica_plastic_nationalgeographic_1391365.jpg?w=1600&h=900" class="img-fluid" alt="Responsive image"></img>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
</div>

<p>
  <a class="btn btn-primary p-3 mb-2 bg-info text-white" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button class="btn btn-primary p-3 mb-2 bg-info text-white" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn btn-primary p-3 mb-2 bg-info text-white" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
</div>
<p>
  <a class="btn btn-primary p-3 mb-2 bg-info text-white" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button class="btn btn-primary p-3 mb-2 bg-info text-white" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn btn-primary p-3 mb-2 bg-info text-white" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
</div>
</div>
<h1 className="Titulito">
    Agradecemos su apoyo al campo Colombiano
</h1>
  </div>
    );
}
    export default Miscompras;