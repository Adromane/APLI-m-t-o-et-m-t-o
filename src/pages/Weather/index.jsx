import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { WiCloudy, WiUmbrella, WiStrongWind, WiHumidity } from "react-icons/wi";
import { IoLocationOutline, IoCalendarOutline } from 'react-icons/io5';
import { Container, Consult, Info, Icon, Temperature, Desc, CurrentWeather, Forecast, FInfo, Text, Percent, Location, LInfo, Text2, Flag } from "./style";
import { getWeather, getRainProb } from "../../services/api";


function Weather(){

  const {city} = useParams();
  const date = new Date();
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  const currentDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

  const currentHour = `${(date.getHours() < 10 ? "0" : "") + date.getHours()}:${(date.getMinutes() < 10 ? "0" : "") + date.getMinutes()}`;




  const [data, setData] = useState()
  const [rainProb, setRainProb] = useState(0)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    async function getData() {

      const response = await getWeather(city)

      if(response.cod === 200){
        const rainProbResponse = await getRainProb(city)
        setRainProb(rainProbResponse.list[0].pop * 100)

        setData(response)
        setLoading(false)

      }else {
        setLoading(false)
        setNotFound(true)
      }
    }
    getData();
  }, [])

  getWeather();

  if(loading){
    return (

      <Container>
        <Consult>
          Carregando...
        </Consult>
      </Container>

    );
  }

  if(notFound){
    return (

      <Container>
        <Consult>
          Não foi possível carregar as informações de {city}!
        </Consult>
      </Container>

    );
  }

  return (

    <Container>
      <Consult>
        <Info>
          <Icon src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="Ícone"/>
          <Temperature>{data.main.temp.toFixed(0)}°<span>C</span></Temperature>
          <Desc>
            <WiCloudy size={32} />
            <CurrentWeather>{data.weather[0].description[0].toUpperCase() + data.weather[0].description.substring(1)}</CurrentWeather>
          </Desc>
        </Info>
        <Forecast>
          <FInfo>
            <WiUmbrella size={28} />
            <Text>Chuva</Text>
            <Percent>{rainProb}%</Percent>
          </FInfo>

          <FInfo>
            <WiStrongWind size={28} />
            <Text>Vento</Text>
            <Percent>{data.wind.speed} Km/h</Percent>
          </FInfo>

          <FInfo>
            <WiHumidity size={28} />
            <Text>Umidade</Text>
            <Percent>{data.main.humidity.toFixed(0)}%</Percent>
          </FInfo>
        </Forecast>
        <Location>
          <LInfo>
            <IoLocationOutline size={20} />
            <Text2>{data.name}, {data.sys.country}</Text2>
            <Flag src={`https://www.countryflagicons.com/FLAT/64/${data.sys.country}.png`}/>
          </LInfo>
          <LInfo>
            <IoCalendarOutline size={20} />
            <Text2>{currentDate} <span>{currentHour}</span></Text2>
          </LInfo>
        </Location>
      </Consult>
    </Container>

  );
};

export default Weather;
