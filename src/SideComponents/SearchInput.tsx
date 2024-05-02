import React from "react";

const SearchInput: React.FC<{ style: string }> = ({ style }) => {
  return <input type="text" placeholder="Search..." className={style} />;
};

export default SearchInput;
