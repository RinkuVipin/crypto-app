import React from "react";
import { AppContext } from "../App/AppBar/AppProvider";

export default function WelcomeMessage() {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            Welcome to CryptoDash, Please select your favourite coins to begin..
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
}
