import React, { useContext } from "react";
import { AppContext } from "../HOC/AppProvider";

const Page = ({ name, children }) => {
  const [page] = useContext(AppContext);
  return <>{page === name ? <div>{children}</div> : null}</>;
};

export default Page;
