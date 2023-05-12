/* 7️⃣ *** COMPONENTE CelularCard *** 7️⃣

Implementar el componente CelularCard.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que renderizar una serie de etiquetas HTML que incluyan texto y propiedades.
🟢 Tendrás que despachar una action para eliminar un celular específico.

IMPORTANTE
❗Este componente debe ser FUNCIONAL.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/

import "./celularCard.css";
import React from "react";
import { Link } from "react-router-dom";
import * as actions from "../../redux/actions/index";
import { useDispatch } from "react-redux";



const CelularCard = (props) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(actions.deleteCelular(props.id))
  }
  return <div className="card">
    <button onClick={handleClick}>x</button>

    <h3>{props.modelo}</h3>
    <img src={props.imagen} alt={props.modelo} />
    <p>{`Marca: ${props.marca}`}</p>
    <h4>{`Precio: $${props.precio} USD`}</h4>
    <Link to={`/celulares/${props.id}`}>
      {props.modelo}
    </Link>
  </div>;
};

export default CelularCard;
