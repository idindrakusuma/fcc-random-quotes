import { useState, useEffect } from 'react';

function useQuote() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState('');

  const getNewQuote = async () => {
    setLoading(true);
    try {
      const rawResult = await fetch('https://api.quotable.io/random');
      const result = await rawResult.json();

      if (result._id) {
        setData(result);
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('ERR_WHEN_GET_QUOTE', e);
    }
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return {
    data,
    loading,
    refetch: getNewQuote,
  };
}

export default useQuote;
