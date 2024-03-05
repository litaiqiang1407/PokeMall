const validators = {
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
  phone: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  name: /^[a-zA-Z]+$/,
  date: /^\d{4}-\d{2}-\d{2}$/,
  number: /^\d+$/,
};

const errorMessages = {
  phone: {
    required: "Phone number is required",
    invalidFormat: "Invalid phone number format",
  },
  password: {
    required: "Password is required",
    invalidFormat:
      "Password must contain minimum eight characters, at least one letter and one number",
  },
};

const validateField = (field, value) => {
  if (!value) return `Please enter your ${field}.`;
  const regex = validators[field];
  return regex.test(value) ? "" : errorMessages[field].invalidFormat;
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

export { isValidation, validators, isExist };
