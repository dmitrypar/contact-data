import { useState, useEffect } from "react";
import axios from "axios";

const useServerData = ({ url, isButtonClick }) => {
  const [contactData, setContactData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getData = () => {};

  useEffect(() => {
    if (!isButtonClick) {
      return;
    }
    setIsLoading(true);
    axios.get(url).then((res) => {
      //console.log(res)
      setContactData(res.data);
      setIsLoading(false);
      setIsLoaded(true);
    });
  }, [url, isButtonClick]);

  return [
    { contactData, isLoading, isLoaded, setContactData, setIsLoading },
    getData,
  ];
};

export default useServerData;
