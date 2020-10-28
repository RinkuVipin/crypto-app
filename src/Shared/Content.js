import React from "react";
import { AppContext } from "../App/AppBar/AppProvider";

export default function Content(props) {
  return (
    <AppContext.Consumer>
      {({ coinList, priceList, firstVisit, activePage }) => {
        if (!coinList && activePage === "settings")
          return <div>Loading Coins ...</div>;
        if (activePage === "dashboard") {
          if (!firstVisit && !priceList) return <div>Loading Prices ...</div>;
        }
        return <div>{props.children}</div>;
      }}
    </AppContext.Consumer>
  );
}
