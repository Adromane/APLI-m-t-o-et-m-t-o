import styled from "styled-components";
import { Link } from "react-router-dom";
import background from '../../assets/images/background.jpg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-position: center;
  background-color: transparent;
  outline: none;
  opacity: 1;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Consult = styled.section`
  width: 20%;
  min-width: 300px;
  height: 48%;
  min-height: 288px;
  background-color: #191b1f20;
  backdrop-filter: blur(5px);
  border: 2px solid #191b1f40;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h1`
  color: #F3F3F3;
  width: 90%;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  border-bottom: 1px solid #f3f3f329;
  padding-bottom: 8px;
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Search = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 8px;
  background-color: #F3F3F3;
  border: none;
  outline: none;
  margin-bottom: 8px;
`;

export const Submit = styled(Link)`
  width: 100%;
  height: 32px;
  border-radius: 8px;
  border: none;
  outline: none;
  background:linear-gradient(to right, #162f2b, #173940);
  color: #F3F3F3;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all .5s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover{
    transform: scale(103%);
  }

`;
