import React from "react";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";
import ConfirmButton from "./ConfirmButton";
import SearchCoin from "./SearchCoin";
import WelcomeMessage from "./WelcomeMessage";

export default function Settings() {
  return (
    <Page name="settings">
      <WelcomeMessage />
      <CoinGrid favSection />
      <ConfirmButton />
      <SearchCoin />
      <CoinGrid />
    </Page>
  );
}
