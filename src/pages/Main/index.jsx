import React, { useState } from "react";
import { Container, Consult, Title, Form, Search, Submit } from "./style";

function Main(){

  const [city, setCity] = useState()


  return (
    <Container>
      <Consult>
        <Title>Consulter la météo</Title>
        <Form>
          <Search
            type="text"
            placeholder="Entrez une ville" 
            city={city}
            onChange={(event) => setCity(event.target.value.replace(' ', '%20'))}
          />
          <Submit to={`/${city}/weather`}>Envoyer</Submit>
        </Form>
      </Consult>
    </Container>
  );
};

export default Main;
