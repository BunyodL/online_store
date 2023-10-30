export const requiredField = value => {
  const errors = {};
  if (!value.username) {
    errors.username = 'Required field';
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.username)) {
    //   errors.username = 'Invalid email address';
  }
  if (!value.password) {
    errors.password = 'Required field';
  }
  return errors;
};
