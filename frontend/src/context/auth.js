import React, { useReducer, createContext } from "react";

//Auth state
const AuthContext = createContext({
  user: null,
  login: userData => {},
  logout: () => {}
});

//Reducers
const authReducer = (state, action) => {
  switch (action.state) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

//Actions and returning the state down the component tree
const AuthProvider = props => {
  const [state, dispatch] = useReducer(authReducer);

  const login = userData => {
    dispatch({
      type: "LOGIN",
      payload: userData
    });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
