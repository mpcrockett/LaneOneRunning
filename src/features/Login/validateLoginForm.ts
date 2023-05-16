import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Valid email required.'),
  password: Yup.string().min(3).max(50)
})