import Link from "next/link";
import React from "react";
import NavigationLinks from "./NavigationLinks";
import { SearchBox } from "./SearchBox";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>

        <Link href="/" prefetch={false}>
            <h1 className="font-serif text-4xl text-center">The{" "}<span className="underline decoration-6 decoration-orange-400">CRAB</span>{" "}News</h1>
        </Link>

        <div className="flex items-center justify-end space-x-2">
            {/* dark mode button */}
            
            <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full text-lg font-semibold dark:bg-slate-700">Subscribe Now</button>
        </div>
      </div>

      {/* navigation links */}
      <NavigationLinks/>


      {/* search bar */}
      <SearchBox/>

    </header>
  );
};

export default Header;
