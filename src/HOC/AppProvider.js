import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = (props) => {
  const [page, setPage] = useState("dashboard");

  return (
    <AppContext.Provider value={[page, setPage]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
