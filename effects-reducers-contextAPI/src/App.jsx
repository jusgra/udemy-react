import { useState, useEffect } from "react";

import Login from "./components/Login";
import Home from "./components/Home";
import MainHeader from "./components/MainHeader";
import AuthContext from "./components/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.loggedIn === "1") setIsLoggedIn(true);
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("loggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  return (
    <AuthContext.Provider value={{ authenticated: isLoggedIn, logout: logoutHandler }}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
