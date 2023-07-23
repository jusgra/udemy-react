import React, { useEffect, useReducer, useState } from "react";

import Card from "./Card";
import classes from "./css/Login.module.css";
import Button from "./Button";

const USER_ACTIONS = {
  INPUT: "user-input",
  BLUR: "input-blur",
};

const emailReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.INPUT:
      return { value: action.payload, isValid: action.payload.includes("@") };
    case USER_ACTIONS.BLUR:
      return { value: state.value, isValid: state.value.includes("@") };
    default:
      return { value: "", isValid: false };
  }
};

const pswReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.INPUT:
      return { value: action.payload, isValid: action.payload.trim().length > 6 };
    case USER_ACTIONS.BLUR:
      return { value: state.value, isValid: state.value.trim().length > 6 };
    default:
      return { value: "", isValid: false };
  }
};

const Login = (props) => {
  const [emailState, emailDispatch] = useReducer(emailReducer, { value: "", isValid: null });
  const [pswState, pswDispatch] = useReducer(pswReducer, { value: "", isValid: null });

  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: eValid } = emailState;
  const { isValid: pValid } = pswState;

  useEffect(() => {
    setFormIsValid(eValid && pValid);
  }, [eValid, pValid]);

  const emailChangeHandler = (event) => {
    emailDispatch({ type: USER_ACTIONS.INPUT, payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    pswDispatch({ type: USER_ACTIONS.INPUT, payload: event.target.value });
  };

  const validateEmailHandler = () => {
    emailDispatch({ type: USER_ACTIONS.BLUR });
  };

  const validatePasswordHandler = () => {
    pswDispatch({ type: USER_ACTIONS.BLUR });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, pswState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${pswState.isValid === false ? classes.invalid : ""}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={pswState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
