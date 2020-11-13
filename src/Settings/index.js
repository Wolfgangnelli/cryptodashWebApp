import React from "react";
import Welcome from "./Welcome";
import { ConfirmButton } from "./ConfirmButton";

export default function () {
  return (
    <>
      <Welcome name={"Cryptodash"} />
      <ConfirmButton />
    </>
  );
}
