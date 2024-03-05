const validators = {
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
  phone: /^\d{10}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  name: /^[a-zA-Z]+$/,
  date: /^\d{4}-\d{2}-\d{2}$/,
  number: /^\d+$/,
};

const validateField = (field, value) => {
  if (!value) return `${field} is required`;
  const regex = validators[field];
  return regex.test(value) ? "" : `Invalid ${field} format`;
};

const isValidation = (fields, setErrors) => {
  const errors = {};
  let isValid = true;

  fields.forEach(({ name, value }) => {
    const error = validateField(name, value);
    if (error) {
      errors[name] = error;
      isValid = false;
    }
  });

  setErrors(errors);
  return isValid;
};

export { isValidation, validators };
