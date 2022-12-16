import * as types from "./actionTypes";

import axios from "axios";

const getCapsuleReq = () => {
  return {
    type: types.GET_CAPSULE_REQ
  };
};

const getCapsuleSuccess = (payload) => {
  return {
    type: types.GET_CAPSULE_SUCCESS,
    payload,
  };
};

const getCapsuleFail = () => {
  return {
    type: types.GET_CAPSULE_FAIL
  };
};
// https://api.spacexdata.com/v3/capsules?limit=4&offset=${page}
// https://api.spacexdata.com/v3/capsules

const getData = (page,key,value) => {
  console.log(page)
    return(dispatch) => {
        dispatch(getCapsuleReq());
        axios.get(`https://api.spacexdata.com/v3/capsules?limit=6&offset=${page}&${key}=${value}`).then((res) => dispatch(getCapsuleSuccess(res.data))).catch((e) => dispatch(getCapsuleFail()))

    }
}


  export {getData}