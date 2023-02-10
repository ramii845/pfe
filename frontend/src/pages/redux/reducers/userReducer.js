import { REGISTER,REGISTER_SUCCESS ,REGISTER_FAIL,} from "../Actiontypes";

  const userInit = {
    users: null,
    errors: null,
    loading: false,
    token: null,
    isAuth: null,
  };
  
  const userReducer = (state = userInit, {type, payload}) => {
    switch (type) {
      case REGISTER:
        return {
          ...state,
          loading: true,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          users: payload,
          errors: null,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
        default:
            return state;
        }
      };
      
      export default userReducer;