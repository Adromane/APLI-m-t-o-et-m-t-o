import styled from "styled-components";
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
  width: 24%;
  min-width: 300px;
  height: 56%;
  min-height: 375px;
  background-color: #191b1f20;
  backdrop-filter: blur(5px);
  border: 2px solid #191b1f40;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  color: #F3F3F3;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

export const Info = styled.div`
  width: 90%;
  border-bottom: 1px solid #f3f3f329;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Icon = styled.img`
  width: 88px;
  height: 88px;
  margin: 0;
`;

export const Temperature = styled.h1`
  color: #F3F3F3;
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  line-height: 1;

  span{
    font-size: 32px;
    margin-top: 2px;
  }
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg{
    color: #F3F3F3;
  }
`;
export const CurrentWeather = styled.h3`
  font-size: 16px;
  font-weight: 100;
  color: #F3F3F3;
  margin-left: 4px;
`;

export const Forecast = styled.div`
  width: 90%;
  height: 72px;
  border-bottom: 1px solid #f3f3f329;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
`;

export const FInfo = styled.div`
  width: 32%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg{
    color: #F3F3F3;
  }
`;

export const Text = styled.h3`
  font-size: 12px;
  font-weight: 100;
  color: #F3F3F350;
  margin: 0;

  span{
    color: #F3F3F3;
    font-weight: 400;
  }
`;

export const Percent = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #F3F3F3;
  margin: 0;
`;

export const Location = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;

  svg{
    color: #F3F3F3;
  }
`;

export const Text2 = styled.h3`
  font-size: 12px;
  font-weight: 100;
  color: #F3F3F3;
  margin: 0;
  margin-left: 4px;

  span{
    color: #F3F3F3;
    font-weight: 600;
  }
`;

export const Flag = styled.img`
  height: 24px;
  width: auto;
  margin: 0;
  margin-left: 6px;

`;
