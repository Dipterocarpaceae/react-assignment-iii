import { useState, useEffect } from "react";

const useFetch = (urlEnd) => {
  const url = `https://jsonplaceholder.typicode.com/${urlEnd}`;
  const [data, setData] = useState(null);
  const fiveData = [];

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

  data?.forEach((element) => {
    if (element.id <= 5) fiveData.push(element);
  });

  return [fiveData];
};

export default useFetch;
