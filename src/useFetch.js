import { useState, useEffect } from "react";

const useFetch = (urlEnd) => {
  let url = "https://jsonplaceholder.typicode.com/";
  const [data, setData] = useState(null);
  url = url + urlEnd;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
