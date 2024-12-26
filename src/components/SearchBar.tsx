import { useState, useEffect } from "react";

import { Search, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import useShopContext from "../hooks/useShopContext";

const SearchBar = () => {
  // States
  const [searchVisible, setSearchVisible] = useState(false);

  // custom hook

  const { searchText, setSearchText, showSearchBar, setShowSearchBar } =
    useShopContext();

  // path checking to show search bar
  const path = useLocation();

  useEffect(() => {
    if (path.pathname === "/collection") {
      setSearchVisible(true);
    } else {
      setSearchVisible(false);
    }
  }, [path.pathname, setShowSearchBar]);

  return showSearchBar && searchVisible ? (
    <div className="my-5 flex justify-center items-center gap-4 border-b pb-5 border-gray border-opacity-50">
      <div className="relative w-full max-w-lg flex items-center">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full px-5 py-2 border border-gray border-opacity-50 rounded-full"
        />
        <Search className="absolute right-4 text-gray" />
      </div>
      <X
        onClick={() => setShowSearchBar(!showSearchBar)}
        className="text-gray cursor-pointer hover:text-black"
      />
    </div>
  ) : null;
};

export default SearchBar;
