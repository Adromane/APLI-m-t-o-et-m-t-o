import React, { useState } from "react";
import { Container, Consult, Title, Form, Search, Submit } from "./style";

function Main(){

  const [city, setCity] = useState()


  return (
    <Container>
      <Consult>
        <Title>Consultar Clima</Title>
        <Form>
          <Search
            type="text"
            placeholder="Digite uma cidade"
            city={city}
            onChange={(event) => setCity(event.target.value.replace(' ', '%20'))}
          />
          <Submit to={`/${city}/weather`}>Enviar</Submit>
        </Form>
      </Consult>
    </Container>
  );
};

export default Main;
