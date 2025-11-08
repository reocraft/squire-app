'use client'
import { useState } from "react";
import Image from "next/image";
import SearchBar from "../Components/Searchbar";
import BoxButton from "../Components/BoxButton";
import SearchResult from "../Components/SearchResult";

export default function Home() {

  const [searchQuery, setSearchQuery] = useState("");
  const [resultText, setResultText] = useState("");
  const [showResult, setShowResult] = useState(false);

  // Function to handle search
  const handleSearch = (query) => {
    if (!query.trim()) return;
    setResultText(`You searched for: "${query}"`);
    setShowResult(true);
  };

  return (
    <div className="min-h-screen font-sans dark:bg-light bg-gray-50">
      <main
        className="
          flex flex-col
          items-start
          justify-start
          px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60
          py-10
          space-y-10
        "
      >
        {/* Top-left heading */}
        <h1
          className="
            text-black
            text-[clamp(1.8rem,4vw,3rem)]
            font-semibold
          "
        >
          Hello User 👋
        </h1>

        {/* Search bar */}
        <div className="w-full flex flex-col gap-4">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSearch={() => handleSearch(searchQuery)}
          />

          {/* Search result component (stays on the page) */}
          {showResult && (
            <SearchResult text={resultText} />
          )}
        </div>


        {/* Button boxes */}
        <div
          className="
            flex flex-wrap justify-center  /* <-- center horizontally */
            gap-4 sm:gap-6 md:gap-8 lg:gap-10
            pt-8 sm:pt-10 md:pt-12
            w-full     
          "
        >
          <BoxButton
            imageSrc="/images/icon1.png"
            title="Profile"
            onClick={() => console.log('Profile clicked!')}
          />
          <BoxButton
            imageSrc="/images/icon2.png"
            title="Messages"
            onClick={() => console.log('Messages clicked!')}
          />
          <BoxButton
            imageSrc="/images/icon3.png"
            title="Settings"
            onClick={() => console.log('Settings clicked!')}
          />
        </div>
      </main>
    </div>
  );
}
