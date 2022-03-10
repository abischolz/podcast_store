import React, { useCallback, useState } from "react";
import { InputBase, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchPodcasts } from "../Logic/api";

const SearchBar = ({ setLoading, setPodcasts }) => {
  const [searchValue, setSearchValue] = useState("");

  const onChange = useCallback((e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLoading(true);
      const podcasts = searchPodcasts(searchValue);
      setPodcasts(podcasts);
      setLoading(false);
    },
    [setPodcasts],
  );
  return (
    <Box>
      <form onSubmit={onSubmit}>
        <InputBase
          onChange={onChange}
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
        />
      </form>
    </Box>
  );
};

export default SearchBar;
