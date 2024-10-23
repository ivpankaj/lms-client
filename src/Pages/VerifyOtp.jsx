// app/verify_otp/page.tsx
import React from "react";
import SuspenseBoundary from "../Components/SuspenseBoundary";
import VerifyOtp from "../Components/VerifyOtp";


export default function VerifyOtpPage () {
  return (
    <SuspenseBoundary>
      <VerifyOtp />
    </SuspenseBoundary>
  );
};


