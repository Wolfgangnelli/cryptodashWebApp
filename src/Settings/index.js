import React from "react";
import Welcome from "./Welcome";
import { ConfirmButton } from "./ConfirmButton";
import Page from "../Pages/Page";

export default function () {
  return (
    <>
      <Page name="settings">
        <Welcome name={"Cryptodash"} />
        <ConfirmButton />
      </Page>
    </>
  );
}
