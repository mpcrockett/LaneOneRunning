import { LoginFormValues } from "../../utils/Types";
import LoginFormBox from "./LoginFormBox";

interface Props {
  toggleLogin: () => void;
}

function LoginForm(props: Props) {
  const handleSubmitForm = (values: LoginFormValues) => {
    console.log(values);
  };

  return (
    <LoginFormBox
      toggleLogin={props.toggleLogin}
      handleSubmitForm={handleSubmitForm}
    />
  );
}

export default LoginForm;
