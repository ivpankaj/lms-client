import React, { Suspense } from "react";

export default function MainContent({ children }) {
  return (
    <>
      <main className="flex-1 h-[100vh] bg-gray-200 p-4 sm:p-6">
        <div>
          {children}
        </div>
      </main>
    </>
  );
}
