import React from 'react';

function ReferralLinkButton({ link, onCopy }) {
  return (
    <button
      className="bg-black text-white rounded-lg px-4 py-2"
      onClick={() => onCopy(link)}
    >
      Copy Referral Link
    </button>
  );
}

export default ReferralLinkButton;
