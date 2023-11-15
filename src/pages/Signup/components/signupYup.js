import * as yup from 'yup';

export const schema = yup
  .object({
    username: yup.string().required(),
    age: yup.number().positive().required().min(18).max(100),
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();