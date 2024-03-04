const isEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

const isPhone = (phone) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
};

const isPassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
};

const isName = (name) => {
  const nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(name);
};

const isDate = (date) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(date);
};

const isNumber = (number) => {
  const numberRegex = /^\d+$/;
  return numberRegex.test(number);
};

const isValidateForm = (phone, password, setPhoneError, setPasswordError) => {
  let phoneValid = true;
  let passwordValid = true;

  // Validate Phone
  if (!phone) {
    setPhoneError("Phone number is required");
    phoneValid = false;
  } else if (!isPhone(phone)) {
    setPhoneError("Invalid phone number format");
    phoneValid = false;
  } else {
    setPhoneError("");
  }

  // Validate Password
  if (!password) {
    setPasswordError("Password is required");
    passwordValid = false;
  } else if (!isPassword(password)) {
    setPasswordError("Invalid password format");
    passwordValid = false;
  } else {
    setPasswordError("");
  }

  return phoneValid && passwordValid;
};

export {
  isEmail,
  isPhone,
  isPassword,
  isName,
  isDate,
  isNumber,
  isValidateForm,
};
