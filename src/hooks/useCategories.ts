import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { NavData } from "../utils/Types";

interface ErrorResponse {
  message: string
}

const useCategories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<NavData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    const getCategories = async () => {
      try {
        const response = await axios.get('/api/category');
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<ErrorResponse>;
          setError(axiosError.message);
        }
        setIsLoading(false);
      }
    };

    getCategories();

    return (): void => {
      controller.abort()
    };

  }, []);

  return { isLoading, data, error }
}

export default useCategories;