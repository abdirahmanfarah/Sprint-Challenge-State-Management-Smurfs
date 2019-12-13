import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const Form = props => {
  console.log(props);
  const [newSmurf, setNewSmurf] = useState({});

  const handleChange = event => {
    setNewSmurf({ ...newSmurf, [event.target.name] : event.target.value})
  }
  const addSmurf = e => {
    e.preventDefault();
    console.log(newSmurf);
    props.addSmurf({...newSmurf, id:props.state.length})
  }
 
  return (
    <form className='form'>
      <input  name="name" placeholder='name' onChange={handleChange} value={newSmurf.name} />

      <input name="age" placeholder='age' onChange={handleChange} value={newSmurf.age} />

      <input name="height" placeholder='height' onChange={handleChange} value={newSmurf.height} />

      <button onClick={addSmurf} >Add Smurf</button>
    </form>
  )
}
const mapStateToProps = state => {
  return {
    state
  }
}
export default connect(
  mapStateToProps, 
  { addSmurf }
)(Form);