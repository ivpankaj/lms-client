import React, { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
  TelegramShareButton,
  RedditShareButton,
  EmailShareButton,
  PinterestShareButton,
  FacebookMessengerShareButton,
  WhatsappIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  TelegramIcon,
  RedditIcon,
  EmailIcon,
  PinterestIcon,
  FacebookMessengerIcon,
} from "react-share";
import { FaInstagram, FaEllipsisH, FaTimes } from "react-icons/fa";
import Layout from "../Components/Layout";
import ReferralCode from "../Components/ReferralCode";
import ReferralLinkButton from "../Components/ReferralLinkButton";

export default function ReferAndEarn() {
  const referralLink = "https://skillontime.com/";

  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showAllIcons, setShowAllIcons] = useState(false);
  const [url, setUrl] = useState(referralLink);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleShareButtonClick = () => {
    setShowShareOptions(!showShareOptions);
    setShowAllIcons(false);
  };

  const handleShowMoreClick = () => {
    setShowAllIcons(!showAllIcons);
  };

  const handleCopyUrlClick = () => {
    copyToClipboard(url);
  };

  const openInstagram = () => {
    toast.info("Instagram does not support direct sharing from the web. Please share manually.");
    copyToClipboard(referralLink);
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="flex justify-center items-center px-6">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl w-full">
          <div className="flex-1 bg-white rounded-lg shadow-md p-4 border border-gray-200">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">Refer & Earn</h1>
              <p className="text-gray-700 mb-6">Earn ₹1000 for every successful referral!</p>
              <p className="text-gray-700">Your friend also gets ₹500 off on their first course.</p>
            </div>

            <div className="flex flex-col items-center text-center mb-4">
              <Suspense fallback={<div>Loading Referral Code...</div>}>
                <ReferralCode code="imvskilldev" onCopy={copyToClipboard} />
              </Suspense>
            </div>

            <div className="flex flex-col items-center mb-8">
              <Suspense fallback={<div>Loading Referral Link Button...</div>}>
                <ReferralLinkButton link={referralLink} onCopy={copyToClipboard} />
              </Suspense>
            </div>

            <div className="p-6 rounded-lg bg-blue-50 border border-blue-100 transform scale-95 hover:scale-100 hover:bg-blue-200 transition-transform duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">How It Works</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Share your unique referral code or link with friends.</li>
                <li>When they sign up and enroll, you earn rewards.</li>
                <li>The more friends you refer, the more you earn!</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-white rounded-lg shadow-md p-10 border border-gray-200 lg:w-1/3">
            <div className="relative mb-6">
              <img
                src="/refer.jpg"
                alt="Why Refer Us"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-100 mb-6 transform scale-95 hover:scale-100 hover:bg-blue-200 transition-transform duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Refer Us?</h2>
              <p className="text-gray-700">
                Our platform offers top-notch courses and incredible discounts. By referring friends, you help them discover great learning opportunities while you earn rewards.
              </p>
            </div>

            <div className="relative flex flex-col items-center">
              <button
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center"
                onClick={handleShareButtonClick}
              >
                Share Now
              </button>

              {showShareOptions && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                  <div className="relative bg-white rounded-lg shadow-xl p-6 max-w-lg w-full">
                    <button
                      className="absolute top-2 right-2 text-gray-600 bg-gray-100 rounded-full p-1"
                      onClick={handleShareButtonClick}
                    >
                      <FaTimes size={24} />
                    </button>
                    <div className="flex flex-col items-center gap-4 mt-8">
                      <div className="flex items-center bg-gray-100 rounded-lg border border-gray-200 p-2 w-full">
                        <input
                          type="text"
                          value={url}
                          readOnly
                          className="flex-1 p-2 bg-transparent border-none text-gray-800"
                        />
                        <button
                          onClick={handleCopyUrlClick}
                          className="bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700"
                        >
                          Copy
                        </button>
                      </div>

                      <div className="flex flex-wrap justify-center gap-4 mt-4">
                        <WhatsappShareButton url={referralLink} title="Check out Skill On Time!">
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>

                        <LinkedinShareButton url={referralLink} title="Check out Skill On Time!">
                          <LinkedinIcon size={32} round />
                        </LinkedinShareButton>

                        <TwitterShareButton url={referralLink} title="Check out Skill On Time!">
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>

                        <FacebookShareButton url={referralLink} title="Check out Skill On Time!">
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>

                        {!showAllIcons && (
                          <button onClick={handleShowMoreClick} className="flex items-center justify-center p-2">
                            <FaEllipsisH size={32} />
                          </button>
                        )}

                        {showAllIcons && (
                          <div className="flex flex-wrap justify-center gap-4">
                            <TelegramShareButton url={referralLink} title="Check out Skill On Time!">
                              <TelegramIcon size={32} round />
                            </TelegramShareButton>

                            <RedditShareButton url={referralLink} title="Check out Skill On Time!">
                              <RedditIcon size={32} round />
                            </RedditShareButton>

                            <EmailShareButton
                              url={referralLink}
                              subject="Check out Skill On Time!"
                              body="I found this amazing platform and thought you might be interested!"
                            >
                              <EmailIcon size={32} round />
                            </EmailShareButton>

                            <PinterestShareButton
                              url={referralLink}
                              media={`${referralLink}/image.jpg`}
                              description="Check out Skill On Time!"
                            >
                              <PinterestIcon size={32} round />
                            </PinterestShareButton>

                            <FacebookMessengerShareButton url={referralLink} appId="YOUR_FACEBOOK_APP_ID">
                              <FacebookMessengerIcon size={32} round />
                            </FacebookMessengerShareButton>

                            <button onClick={openInstagram} className="flex items-center justify-center p-2">
                              <FaInstagram size={32} color="#E1306C" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
