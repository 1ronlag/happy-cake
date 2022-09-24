import { Container, Image } from "react-bootstrap";
import Cake from '../assets/pastel.png'

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span> 
      </h1>
      <h6> El lugar de los pasteles felices </h6>

      <Image className='cake' src={Cake}/>
    </Container>
  );
};
