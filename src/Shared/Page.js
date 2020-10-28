import React from "react";
import { AppContext } from "../App/AppBar/AppProvider";

export default function Page(props) {
  return (
    <AppContext.Consumer>
      {({ activePage }) => {
        if (activePage !== props.name) return null;
        return <div>{props.children}</div>;
      }}
    </AppContext.Consumer>
  );
}
