import React, { useState } from 'react';
import { calcularTotal } from '../helpers';

const Formulario = (props) => {
  // destructuring de los props cuando son muchas variables
  const { cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando } = props;
  // función ejemplo de onChange
  const leerCantidad = (event) => {
    guardarCantidad(parseInt(event.target.value));
  };
  // definir el state
  const [error, guardarError] = useState(false);
  // cuando el usuario hace submit
  const calcularPrestamos = (event) => {
    event.preventDefault();
    // validar
    if (cantidad === 0 || plazo === '') {
      guardarError(true);
      return;
    }
    // eliminar el error previo
    guardarError(false);
    // habilitar el spinner
    guardarCargando(true);
    setInterval(() => {
      // realizar cotización
      const total = calcularTotal(cantidad, plazo);
      // una vez calculado, guardar el total
      guardarTotal(total);
      // deshabilitar el spinner
      guardarCargando(false);
    }, 3000);
  };

  return (
    <>
      <form onSubmit={calcularPrestamos}>
        <div className='row'>
          <div>
            <label>Cantidad Préstamo</label>
            <input className='u-full-width' type='number' placeholder='Ejemplo: 3000' onChange={leerCantidad} />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select className='u-full-width' onChange={event => guardarPlazo(parseInt(event.target.value))}>
              <option value=''>Seleccionar</option>
              <option value='3'>3 meses</option>
              <option value='6'>6 meses</option>
              <option value='12'>12 meses</option>
              <option value='24'>24 meses</option>
            </select>
          </div>
          <div>
            <input type='submit' value='Calcular' className='button-primary u-full-width' />
          </div>
        </div>
      </form>
      {(error) ? <p className='error'>Todos los campos son obligatorios</p> : null}
    </>
  );
};

export default Formulario;
