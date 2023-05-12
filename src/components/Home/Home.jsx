/*5️⃣ ***COMPONENTE Home*** 5️⃣
Implementar el componente Home. Este deberá renderizar todos los celulars (Cards) que contengan la 
información consumida directamente del estado global de Redux. 
📢¡Sigue las instrucciones de los tests!📢
REQUISITOS
🟢 Tendrás que conectar el componente con el estado global de Redux mediante dos funciones: mapStateToProps y 
mapDispatchToProps.
🟢 Tendrás que renderizar una serie de etiquetas HTML con información dentro.
🟢 Tendrás que mappear tu estado global para luego renderizar su información utilizando el componente <celularCard />.
IMPORTANTE
❗Este componente debe ser de CLASE.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
 [Ej]: import * as actions from "./../../redux/actions/index";
*/

import "./home.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import mainImage from '../../img-cp2/main-image-cp2.jpg';
import * as actions from "./../../redux/actions/index";
import CelularCard from '../CelularCard/CelularCard'

export class Home extends Component {

  componentDidMount() {
    this.props.getAllCelulares();
  }

  render() {
    return (<div className="home">
      <h1>Cellphones</h1>
      <img src={mainImage} alt={'celular-logo'} />
      <h3>Celulares:</h3>
      <h4>Checkpoint M2</h4>
      {
        this.props.celulares?.map(e => (
          <CelularCard
            key={e.id}
            id={e.id}
            marca={e.marca}
            precio={e.precio}
            imagen={e.imagen}
            modelo={e.modelo}
          />
        ))
      }
    </div>);
  }
}

export const mapStateToProps = (state) => ({
  celulares: state.celulares
});

export const mapDispatchToProps = (dispatch) => ({
  getAllCelulares: () => dispatch(actions.getAllCelulares())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
