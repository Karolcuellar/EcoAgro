import React from 'react';
import ReactDOM from 'react-dom';
import App from './Componentes/App';
import App1 from './Componentes/App1';
import Mapa from './Componentes/Mapa';
import Miscompras from './Componentes/Miscompras';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';


ReactDOM.render(
  <React.StrictMode>
   <Miscompras/>
  </React.StrictMode>,
  document.getElementById('root')
);

