const validators = {
  username: /^[a-zA-Z0-9._-]{3,16}$/,
  name: /^[\p{L}\s']+$/u,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
  phone: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  // for date format: dd/mm/yyyy
  date: /^\d{2}\/\d{2}\/\d{4}$/,
  number: /^\d+$/,
};

const errorMessages = {
  username: {
    required: "Username is required",
    invalidFormat: "Username must contain minimum three characters",
    exist: "This username is already taken",
  },
  name: {
    required: "Name is required",
    invalidFormat: "Invalid name format: only letters are allowed",
  },
  email: {
    required: "Email is required",
    invalidFormat: "Invalid email format: example@gamil.com",
    exist: "This email is already registered",
  },
  phone: {
    required: "Phone number is required",
    invalidFormat: "Invalid phone number format: 03xxxxxxxxx",
    exist: "This phone number is already registered",
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

export { isValidation };
