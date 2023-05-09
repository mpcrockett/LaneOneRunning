import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { registerAsync } from '../../store/userSlice';
import { RegisterFormValues } from '../../utils/Types';
import RegisterForm from './RegisterForm'

function RegisterFormContainer() {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.user);

  const handleSubmitForm = (values: RegisterFormValues) => {
    dispatch(registerAsync(values));
  };


  return (
    <RegisterForm handleSubmitForm={handleSubmitForm} status={status} />
  );
}

export default RegisterFormContainer