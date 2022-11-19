import { useState, useEffect } from "react";

const useFetch = (urlEnd) => {
  const url = `https://jsonplaceholder.typicode.com/${urlEnd}`;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log("OOPS, ERROR WHEN FETCHING DATA: ");
        console.log(error);
      }
    };

    fetchData();
  });
  return [data];
};

export default useFetch;
