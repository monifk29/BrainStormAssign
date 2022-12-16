import * as types from './actionTypes'

const initialState = {
capsule : [],
isLoading: false,
isError: false,
}

export const reducer = (state = initialState,action) => {
const {type,payload} = action

switch(type) {
case types.GET_CAPSULE_REQ: {
return {
...state,
isLoading : true,
isError : false
}
}
case types.GET_CAPSULE_SUCCESS : {
return {
...state,
capsule : payload,
isLoading : false,
isError : false
}
}
case types.GET_CAPSULE_FAIL : {
return {
...state,
isLoading : false,
isError : true
}
}
default :
return state
}
};

