import React from 'react'

const Form = (props) => {
  return(
    <form onSubmit = {props.loadWeather}>
      <input type="text" name="city" placeholder="Hãy chọn thành phố"/>
      <input type="text" name="country" placeholder="Hãy chọn quốc gia"/>
      <button>Xem thời tiết</button>
    </form>
  )
}

export default Form;