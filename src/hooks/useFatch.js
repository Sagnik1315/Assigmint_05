
import { useState, useEffect } from 'react';

function useFatch(url) {
  const [data, setData] = useState([]);
const [isLoading, setLoading] = useState(true);
const [errMsg, setError] = useState("");
useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`wrong: ${response.status}`);
        }
        const res = await response.json();
        setData(res);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { data, isLoading, errMsg };

}

export default useFatch
