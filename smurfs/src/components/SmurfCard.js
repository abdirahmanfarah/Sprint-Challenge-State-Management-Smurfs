import React from 'react';
import Form from '../components/Form'

const SmurfCard = props => {

  return (
    <div>
     <p>Name: {props.item.name}</p> 
     <p>Age: {props.item.age}</p> 
     <p>Height: {props.item.height}</p> 
    </div>
  )
}

export default SmurfCard;