import { useEffect, useState } from "react";
import SearchIcon from "../img/ui/search.png";
import "../styles/Search.css";

interface SearchResultProps {
  search: string;
  genreName: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ search, genreName }) => {
  const productSearch = useGetProductSearch(search).data;
  const nameSearch = useGetNameSearch(search).data;
  const [product, setProduct] = useState(true);
  const [name, setName] = useState(true);
  useEffect(() => {
    setProduct(true);
  }, [productSearch]);
  useEffect(() => {
    setName(true);
  }, [Name]);

  return (
    <>
      {genreName ? (
        <SearchResultGenre genre={genreName} genreName={genreName} />
      ) : (
        <SearchResultBox>
          <div>
            <SearchListTitle product={product} name={name}>
              <div>
                Product {productSearch?.pages[0]?.data?.total_results}
                <IoIosArrowForward
                  onClick={() => setName(!product)}
                  size={35}
                />
              </div>
              <div>
                Creator &#38; Name{" "}
                {productSearch?.pages[0]?.data?.total_results}
                <IoIosArrowForward onClick={() => setName(!name)} size={35} />
              </div>
            </SearchListTitle>
          </div>
          <SearchResultProduct search={search} click={product} />
          <SearchResultName search={search} click={name} />
        </SearchResultBox>
      )}
    </>
  );
};

export default SearchResult;
