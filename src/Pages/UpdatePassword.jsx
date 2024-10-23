import React from "react";
import SuspenseBoundary from "../Components/SuspenseBoundary";
import UpdatePassword from "../Components/UpdatePassword";


export default function UpdatePasswordPage() {
  return (
    <>
        <SuspenseBoundary>
          <UpdatePassword />
        </SuspenseBoundary>
    </>
  );
};