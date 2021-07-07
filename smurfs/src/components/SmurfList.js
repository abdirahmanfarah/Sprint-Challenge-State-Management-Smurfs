import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions';
import Form from './Form';
import SmurfCard from './SmurfCard';

const SmurfList = props => {
  console.log(props);

    useEffect(() =>{
      props.fetchSmurf();
    }, [])

  return (
    <div>
        <Form />
          <h1>Smurfs Database </h1>
        <div className='smurf-container'>
          {props.state.map(smurf => (
            <SmurfCard key={smurf.id} smurf={smurf} />
          ))}
        
       </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    state
 }
}

export default connect(
  mapStateToProps,
  { fetchSmurf }
)(SmurfList);