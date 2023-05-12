/* 6️⃣ ***COMPONENTE CreateCelular*** 6️⃣
Implementar el componente CreateCelular. Este consistirá en un formulario controlado con estados de react.
📢¡Sigue las instrucciones de los tests!📢
REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.
🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".
🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.
🟢 Debes manejar los errores que pueden tener los inputs del formulario.
IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/

import * as Redux from "react-redux";
import * as actions from "../../redux/actions/index";
import { validateErrors, validateMarca, validateModelo, validatePrecio } from '../../utils/validation'
import React from "react";

const CreateCelular = () => {
  const dispatch = Redux.useDispatch()
  const [errors, setErrors] = React.useState({
    marca: "",
    modelo: "",
    precio: "",
  })

  // const [marca, setMarca] = useState("")
  // const [modelo, setModelo] = useState("")
  // const [precio, setPrecio] = useState(0)
  // const [descripcion, setDescripcion] = useState("")
  // const [sistemaOperativo, setSistemaOperativo] = useState("")
  // const [imagen, setImagen] = useState("")
  // const [lanzamiento, setLanzamiento] = useState("")
  const [input, setInput] = React.useState({
    marca: "",
    modelo: "",
    precio: 0,
    descripción: "",
    sistemaOperativo: "",
    imagen: "",
    lanzamiento: "",
  })

  React.useEffect(() => {
    const { marca, modelo, precio } = input;
    setErrors({
      marca: validateMarca(marca) ? "" : "Nombre de marca demasiado largo",
      modelo: validateModelo(modelo) ? "" : "Nombre de modelo demasiado largo",
      precio: validatePrecio(precio) ? "" : "El precio del celular tiene que ser mayor a 0",
    })
  }, [input])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateErrors(errors))
      dispatch(actions.createCelular(input));
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setInput({
      ...input,
      [name]:
        (name === 'precio')
          ? Number(value)
          : value
    })
  }

  return <div>
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Marca: </label>
      <input type="text" name="marca" onChange={handleChange} value={input.marca}/>
      {errors.marca && <p>{errors.marca}</p>}

      <label htmlFor="">Modelo: </label>
      <input type="text" name="modelo" onChange={handleChange} value={input.modelo}/>
      {/* <p>{errors.modelo}</p> */}
      {errors.modelo && <p>{errors.modelo}</p>}

      <label htmlFor="">Precio: </label>
      <input type="number" name="precio" onChange={handleChange} value={input.precio}/>
      {/* <p>{errors.precio}</p> */}
      {errors.precio && <p>{errors.precio}</p>}

      <label htmlFor="">Descripción: </label>
      <textarea name="descripción" id="" cols="30" rows="10" onChange={handleChange}></textarea>
      {/* <input type="textarea" name="descripción" onChange={handleChange} /> */}

      <label htmlFor="">Sistema Operativo: </label>
      <input type="text" name="sistemaOperativo" onChange={handleChange} />

      <label htmlFor="">Imagen: </label>
      <input type="text" name="imagen" onChange={handleChange} />

      <label htmlFor="">Lanzamiento: </label>
      <input type="text" name="lanzamiento" onChange={handleChange} />

      <button type="submit">Crear Celular</button>
    </form>
  </div>;
};

export default CreateCelular;
