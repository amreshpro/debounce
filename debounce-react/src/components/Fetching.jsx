import { useState } from "react";
import { fetchDataFromAPI } from "../utils/fetchDataFromAPI";
import ProductList from "./ProductList";
import Loader from "./Loader";
import { debounce } from "../utils/debounce";

const Fetching = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleText =  (e) => {
    console.log(e.target.value);
    setText(e.target.value);
    setIsLoading(true);
   fetchDataFromAPI(e.target.value).then((res) => {
      setData(res.products);
      setIsLoading(false);
    });
  };
  // const debounced=debounce(handleText,1000)


  console.log(data);
  return (
    <div className="input__container">
      <input
        value={text}
        type="text"
        onInput={handleText}
        placeholder="Search your content"
        style={{ fontSize: "20px", padding: "5px" }}
      />
      {text && <p>You Searched for {text}</p>}

      {isLoading && <Loader/>}

      {/* product list */}
      {!isLoading && text && <ProductList data={data} />}
    </div>
  );
};
export default Fetching;
