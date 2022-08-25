import React, { createContext, useReducer } from "react";
import {v4} from "uuid";
import TungstunNotificationQueue from "./tungstun-notification-queue";

const TungstunNotificationContext = createContext();

const TungstunNotificationProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, {id: v4(), ...action.payload}];
      case "REMOVE_NOTIFICATION":
        return state.filter(n => n.id !== action.id);
      default:
        return state;
    }
  }, []);

  return (
    <TungstunNotificationContext.Provider value={dispatch}>
      <TungstunNotificationQueue state={state} dispatch={dispatch} />
      {props.children}
    </TungstunNotificationContext.Provider>
  );
};

export { TungstunNotificationProvider };
export default TungstunNotificationContext;
