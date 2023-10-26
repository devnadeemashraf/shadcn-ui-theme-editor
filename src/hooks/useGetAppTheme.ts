import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { initializeAppTheme } from "@/store/themeSlice";

const useGetAppTheme = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAppTheme());
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return loading;
};
export default useGetAppTheme;
