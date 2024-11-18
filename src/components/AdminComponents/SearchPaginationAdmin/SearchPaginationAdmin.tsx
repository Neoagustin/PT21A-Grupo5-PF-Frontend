import React from "react";
import PaginationAdmin from "./PaginationAdmin/PaginationAdmin";
import SearchBarAdmin from "./SearchBarAdmin/SearchBarAdmin";

const SearchPaginationAdmin = () => {
  return (
    <div className="text-darkgray">
      <SearchBarAdmin />
      <PaginationAdmin />
    </div>
  );
};

export default SearchPaginationAdmin;
