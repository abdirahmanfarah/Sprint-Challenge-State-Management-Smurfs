import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SmurfList from '../components/SmurfList';
import { fetchSmurfs } from '../actions/index'

function Form(props) {
  const [newSmurf, setNewSmurf] = useState([]);

  useEffect(() => {

    props.fetchSmurfs();
  }, [])


  const handleChange = event => {
    setNewSmurf({...newSmurf, [event.target.name] :event.target.value})
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(newSmurf)
  }

  return (
   <div className='form'>
      <form onSubmit = {handleSubmit}>
        <p> New Smurf</p>
        <input name="name" onChange={handleChange} placeholder='Name' value={newSmurf.name} />
        <input name="age" onChange={handleChange} placeholder='Age' value={newSmurf.age} />
        <input name="height" onChange={handleChange} placeholder='Height' value={newSmurf.height} />
        <button>Submit</button>
      </form>
      <SmurfList smurfs={props.smurfs} />
   </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect( mapStateToProps, { fetchSmurfs })(Form)