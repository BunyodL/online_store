export const requiredField = value => {
  const errors = {};
  if (!value.email) {
    errors.email = 'Required field';
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
    //   errors.email = 'Invalid email address';
  }
  return errors;
};
