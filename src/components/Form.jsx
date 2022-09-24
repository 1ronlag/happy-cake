import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulary() {
  return (
    <Form id='formu'>
      <Form.Group className="mb-3 text-center">
        <Form.Label>Correo</Form.Label>
        <Form.Control className='mail' type="email" placeholder="Ingresa tu E-mail" />
      </Form.Group>

      <Form.Group className="mb-3 text-center" >
        <Form.Label className='text-align-center'>Descripcion</Form.Label>
        <Form.Control className='comment' type="text" placeholder="Ingresa tu comentario" />
      </Form.Group>
      <Container className='text-center mb-5'>
          <Button variant="danger" type="submit">
        Enviar
      </Button>
      </Container>
    </Form>
  );
}

export default Formulary;