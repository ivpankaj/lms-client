import React, { Suspense } from 'react';

export default function SuspenseBoundary({ children }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

