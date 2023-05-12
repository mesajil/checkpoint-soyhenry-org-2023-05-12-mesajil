/* 8️⃣ ***COMPONENTE CelularDetail*** 8️⃣

Implementar el componente CelularDetail. En este ejercicio tendrás que renderizar las diferentes propiedades del celular.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que despachar una action con el "id" del celular cuando se monta el componente. Luego, traer esa 
información de tu estado global.
🟢 Tendrás que renderizar algunos datos del celular correspondiente.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser FUNCIONAL.
❗Para obtener el "id" puedes utilizar useParams.
❗Recuerda que las peticiones asíncronas a los servidores suelen demorar. Debes checkear tener disponible la información a utlizar.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState' 
      - 'React.useEffect'
*/

import "./celularDetail.css";
import * as actions from "./../../redux/actions/index";
import { useParams } from "react-router-dom";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CelularDetail = (props) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const celularDetail = useSelector((state) => state.celularDetail)

  React.useEffect(() => {
    dispatch(actions.getCelularDetails(id))
  }, [celularDetail])

  return <div className="detail">
    {celularDetail?.modelo &&
      (
        <div>
          <h1>{celularDetail.modelo}</h1>
          <img src={celularDetail.imagen} alt={celularDetail.modelo} />
          <h3>{`Precio: $${celularDetail.precio} USD`}</h3>
          <h5>{`Marca: ${celularDetail.marca}`}</h5>
          <h5>{`Lanzamiento: ${celularDetail.lanzamiento}`}</h5>
          <h5>{`Sistema Operativo: ${celularDetail.sistemaOperativo}`}</h5>
          <h5>{`Descripción: ${celularDetail.descripción}`}</h5>
        </div>
      )
    }
  </div>;
};

export default CelularDetail;
