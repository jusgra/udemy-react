import { useContext } from "react";
import classes from "./css/Navigation.module.css";
import AuthContext from "./AuthContext";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  console.log(ctx);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.authenticated && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.authenticated && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.authenticated && (
          <li>
            <button onClick={ctx.logout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
