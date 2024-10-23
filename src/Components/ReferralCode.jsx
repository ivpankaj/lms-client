import React from 'react';
import { FaCopy } from 'react-icons/fa';

function ReferralCode({ code, onCopy }) {
  return (
    <div className="flex-1 items-center">
      <p className="text-xs font-semibold mb-1">Referral Code</p>
      <div
        className="bg-gray-100 text-black px-4 py-2 border rounded-lg flex items-center justify-between cursor-pointer"
        onClick={() => onCopy(code)}
      >
        <span>{code}</span>
        <FaCopy className="ml-2" />
      </div>
    </div>
  );
}

export default ReferralCode;
