import * as Yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(Yup)

export const registerUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name too short.')
    .max(50, 'Input cannot be longer than 50 characters.')
    .required('First name is required.'),
  lastName: Yup.string()
    .min(2, 'Last name too short.')
    .max(50, 'Input cannot be longer than 50 characters.')
    .required('Last name is required.'),
  email: Yup.string().email('Invalid email.').required('Valid email required.'),
  password: Yup.string()
    .min(8, 'Passwords must be at least 8 characters and contain one symbol, number, and uppercase letter.')
    .minUppercase(1, 'Passwords must be at least 8 characters and contain one symbol, number, and uppercase letter.')
    .minNumbers(1, 'Passwords must be at least 8 characters and contain one symbol, number, and uppercase letter.')
    .minSymbols(1, 'Passwords must be at least 8 characters and contain one symbol, number, and uppercase letter.')
    .required(),
  confirm_password: Yup.string().label('Re-enter password.').required().oneOf([Yup.ref('password'), ''], 'Passwords must match.'),
}) 