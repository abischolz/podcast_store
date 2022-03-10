import React, { useCallback, useState } from "react";
import { InputBase, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import { searchPodcasts } from "../Logic/api";
import { withRouter } from "../App";

const SearchBar = ({ ...props }) => {
  const [searchValue, setSearchValue] = useState("");
  const [navigate, setNavigate] = useState(false);
  const history = useNavigate();
  console.log("searchValue", searchValue);

  const onChange = useCallback(
    (e) => {
      e.preventDefault();
      setSearchValue(e.target.value);
      console.log(searchValue);
    },
    [searchValue],
  );

  const onSubmit = useCallback(
    async (e) => {
      debugger;
      e.preventDefault();
      history("/podcasts");
      props.setLoading(true);
      const podcasts = await searchPodcasts(e.target[0].value);

      props.setPodcasts(podcasts);
      props.setLoading(false);
    },
    [props.setLoading, props.setPodcasts, props.loading],
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

export default withRouter(SearchBar);
