import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginAsync } from "../../store/userSlice";
import { LoginFormValues } from "../../utils/Types";
import LoginFormBox from "./LoginFormBox";

interface Props {
  toggleLogin: () => void;
}

function LoginForm(props: Props) {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.user);

  const handleSubmitForm = (values: LoginFormValues) => {
    dispatch(loginAsync(values));
  };

  return (
    <LoginFormBox
      toggleLogin={props.toggleLogin}
      handleSubmitForm={handleSubmitForm}
      status={status}
    />
  );
}

export default LoginForm;
