import { createContext } from "react";

const AuthContext = createContext({
  authenticated: true,
  logout: () => {},
});

export default AuthContext;
