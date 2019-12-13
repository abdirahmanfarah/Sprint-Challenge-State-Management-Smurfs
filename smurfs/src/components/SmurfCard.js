import React from 'react';

import {connect} from 'react-redux';

const SmurfCard = props => {
  console.log(props);
  return (
    <div className="smurf-card">
       <p> Name: {props.smurf.name}</p>
       <p> Age: {props.smurf.age}</p>
       <p> Height: {props.smurf.height}</p>

    </div>
  )
}
const mapStateToProps = state => {
  return {
    state
  }
}
export default connect(
  mapStateToProps,
  {}
)(SmurfCard);