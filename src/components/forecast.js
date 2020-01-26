import React from 'react'

const Forecast = (props) => {
  return(
    <div className="weather">
      {props.country && props.city && <p>Vị trí: {props.city},{props.country}</p>}
      {props.temperature && <p>Nhiệt độ: {props.temperature}</p>}
      {props.humidity && <p>Độ ẩm: {props.humidity}</p>}
      {props.pressure && <p>Áp suất: {props.pressure}</p>}
      {props.icon && <img src= {`https://openweathermap.org/img/w/${props.icon}.png`} alt="Weather icon"/>}
      {props.description && <p>Mô tả: {props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  )
}

export default Forecast;