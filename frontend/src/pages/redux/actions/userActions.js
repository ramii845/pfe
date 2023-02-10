
import axios from 'axios';
import { REGISTER,REGISTER_SUCCESS ,REGISTER_FAIL,ERRORS} from "../Actiontypes";

export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER,
  });
  try {
    let res = await axios.post('/user/register', newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const Registration = (form, navigate)=>dispatch=>{
      axios.post('/api/register', form) 
      .then(res=>{
        navigate('/login')
        dispatch({
            type: ERRORS,
            payload: {}
        })
      })
      .catch(err=>{
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      })
}