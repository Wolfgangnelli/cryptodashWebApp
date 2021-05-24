import React from "react";
import Welcome from "./Welcome";
import { ConfirmButton } from "./ConfirmButton";
import Page from "../Pages/Page";
import CoinLists from "../Components/CoinLists";
import Search from "./Search";

export default function () {
  return (
    <Page name="settings">
      <Welcome name={"Cryptodash"} />
      <CoinLists topSection />
      <ConfirmButton />
      <Search />
      <CoinLists />
    </Page>
  );
}
