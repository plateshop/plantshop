import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchIcon from "../img/ui/search.png";
import "../styles/Search.css";

interface SearchProps {
  click: boolean;
}

const Search: React.FC = () => {
  const router = useRouter();
  const [click, setClick] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    try {
      if (search) {
        router.replace(
          {
            pathname: "/search",
            query: {
              search: search,
              page: 1,
            },
          },
          undefined,
          { shallow: true }
        );
      }
    } catch (e) {
      console.error(e);
    }
  }, [search]);

  const clickSearchImg = () => setClick(!click);

  const handleSearchValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [search]
  );

  return (
    <div className={click ? "SearchContainerClick" : "SearchContainer"}>
      <img
        src={SearchIcon}
        alt="Search"
        onClick={clickSearchImg}
        className="SerchIcon"
        style={{ cursor: "pointer" }}
      />

      <input
        type="text"
        placeholder="제품, 이름"
        autoFocus
        autoComplete="off"
        value={search}
        onChange={handleSearchValue}
        className="SearchInput"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Search;
