import React from 'react'
import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container id='not' className="pt-5">
      <h1 className="mb-4">La ruta que intentas consultar no existe 😫</h1>
      <p>Selecciona alguna alternativa como Home o Contacto</p>
    </Container>
  )
}

