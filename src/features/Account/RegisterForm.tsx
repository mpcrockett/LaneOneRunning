import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { registerAsync } from '../../store/userSlice';
import { RegisterFormValues } from '../../utils/Types';
import RegisterForm from './RegisterFormBox'

interface Props {
  toggleLogin: () => void
}

function RegisterFormContainer(props: Props) {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.user);

  const handleSubmitForm = (values: RegisterFormValues) => {
    dispatch(registerAsync(values));
  };

  return (
    <RegisterForm handleSubmitForm={handleSubmitForm} toggleLogin={props.toggleLogin} status={status} />
  );
}

export default RegisterFormContainer