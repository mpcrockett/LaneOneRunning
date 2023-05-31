import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { OrderData } from "../utils/Types";

interface ErrorResponse {
  message: string;
}

const useOrders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<OrderData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    const getUser = async () => {
      try {
        const response = await axios.get("/api/users/account/orders", {
          withCredentials: true,
        });
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

    getUser();

    return (): void => {
      controller.abort();
    };
  }, []);

  return { isLoading, data, error };
};

export default useOrders;
