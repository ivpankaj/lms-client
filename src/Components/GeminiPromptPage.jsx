import React, { useState } from "react";
import { generateContent } from "../services/api/AI/gemini";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

export default function GeminiPromptPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt) return;
    setLoading(true);
    try {
      const content = await generateContent(prompt);

      // Clean up the content to remove unwanted formatting like "**"
      const cleanedContent = content.replace(/\*\*/g, "");

      setResult(cleanedContent);
    } catch (error) {
      console.error("Error generating content:", error);
      setResult("Error generating content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 flex items-center justify-center mb-6">
        <FaRobot className="text-blue-500 mr-2" /> Ask Seekhle AI
      </h1>
      <div className="flex flex-col items-center border-b-2 border-gray-300 py-2 w-full">
        <form onSubmit={handleSubmit} className="flex w-full max-w-2xl">
          <input
            type="text"
            value={prompt}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="appearance-none bg-gray-100 border border-gray-300 rounded-l w-full text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 flex-grow"
            placeholder="Enter your prompt here..."
          />
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-white font-semibold py-2 px-4 rounded-r ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            disabled={loading}
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin mx-auto" />
            ) : (
              <FaPaperPlane className="mx-auto" />
            )}
          </button>
        </form>
      </div>
      <div className="w-full mt-8">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 flex items-center mb-4">
          <HiOutlineSparkles className="text-yellow-500 mr-2" /> Result:
        </h2>
        <div
          className="mt-2 p-4 border rounded bg-black text-white text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose h-64 sm:h-80 lg:h-96 w-full overflow-y-auto whitespace-normal"
          style={{ wordBreak: "break-word" }}
        >
          {loading ? (
            <div className="text-center text-blue-500">Generating...</div>
          ) : result ? (
            <div className="whitespace-pre-wrap">
              {result.split("\n").map((line, index) => {
                const colors = [
                  "text-green-400",
                  "text-yellow-400",
                  "text-red-400",
                  "text-blue-500",
                ];
                const colorClass = colors[index % colors.length];

                return (
                  <span key={index} className={`block ${colorClass}`}>
                    {line}
                  </span>
                );
              })}
            </div>
          ) : (
            <div className="text-center text-gray-500">No result yet.</div>
          )}
        </div>
      </div>
    </>
  );
}
