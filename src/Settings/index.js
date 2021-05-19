import React from "react";
import Welcome from "./Welcome";
import { ConfirmButton } from "./ConfirmButton";
import Page from "../Pages/Page";
import CoinLists from "../Containers/CoinList";

export default function () {
  return (
    <>
      <Page name="settings">
        <Welcome name={"Cryptodash"} />
        <CoinLists topSection />
        <ConfirmButton />
        <CoinLists />
      </Page>
    </>
  );
}
