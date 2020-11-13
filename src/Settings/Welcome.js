import React, { useContext } from "react";
import { AppContext } from "../HOC/AppProvider";

const Welcome = (props) => {
  const [, , firstVisit] = useContext(AppContext);
  return (
    <>
      {firstVisit ? (
        <h1>
          Welcome to {props.name} !!! Please select your favorite coins to
          begin.
        </h1>
      ) : null
      /*  <h1>Welcome back to {props.name} !!!</h1> */
      }
    </>
  );
};

export default Welcome;
