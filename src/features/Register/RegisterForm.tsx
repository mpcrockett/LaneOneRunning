import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { registerAsync } from "../../store/userSlice";
import { RegisterFormValues } from "../../utils/Types";
import RegisterFormBox from "./RegisterFormBox";

interface Props {
  toggleLogin: () => void;
}

function RegisterForm(props: Props) {
  const dispatch = useAppDispatch();
  const { register_status } = useAppSelector((state) => state.user);

  const handleSubmitForm = (values: RegisterFormValues) => {
    dispatch(registerAsync(values));
  };

  return (
    <RegisterFormBox
      handleSubmitForm={handleSubmitForm}
      toggleLogin={props.toggleLogin}
      status={register_status}
    />
  );
}

export default RegisterForm;
