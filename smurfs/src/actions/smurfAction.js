import axios from "axios";

export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADDING_SMURF_FAILURE = "ADDING_SMURF_FAILURE";

export const fetchSmurf = () => (dispatch) => {
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCHING_SMURF_FAILURE, payload: "no data" });
    });
};

// added this in

export const addSmurf = (smurf) => (dispatch) => {
  console.log(smurf);
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: ADDING_SMURF, payload: smurf });
    })
    .catch((err) => {
      dispatch({ type: ADDING_SMURF_FAILURE, payload: "no data" });
    });
};
