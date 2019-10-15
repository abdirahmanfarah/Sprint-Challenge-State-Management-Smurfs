import React from 'react';
import SmurfCard from '../components/SmurfCard';

const SmurfList = props => {
  return(
    <div>
      {props.smurfs.map(item => (
        <SmurfCard key={item.id} item={item} />
      ))}
    </div>
  )
}
export default SmurfList;