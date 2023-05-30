import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Spinner } from '@chakra-ui/react'
import { useAppDispatch } from "../store/hooks";
import { loggedIn } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

function AuthCallback() {
  const { isLoading, data, error } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(data) {
      dispatch(loggedIn(data));
      navigate('/');
    }
  }, [data]);

  useEffect(() => {
    if(error) {
      navigate('/account');
      console.log(error);
    }
  }, [error]);

  return (
    <>
      {isLoading && <Spinner />}
    </>
  )
}

export default AuthCallback