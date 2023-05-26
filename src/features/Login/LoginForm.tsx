import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginAsync } from "../../store/userSlice";
import { LoginFormValues } from "../../utils/Types";
import LoginFormBox from "./LoginFormBox";

interface Props {
  toggleLogin: () => void;
}

function LoginForm(props: Props) {
  const dispatch = useAppDispatch();
  const { login_status } = useAppSelector((state) => state.user);

  const handleSubmitForm = (values: LoginFormValues) => {
    dispatch(loginAsync(values));
  };

  return (
    <LoginFormBox
      toggleLogin={props.toggleLogin}
      handleSubmitForm={handleSubmitForm}
      status={login_status}
    />
  );
}

export default LoginForm;
