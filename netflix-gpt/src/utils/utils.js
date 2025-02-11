export const validateLoginForm = (email, password) => {
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!emailValidation.test(email)) return "Email is not valid";
  if (!passwordValidation.test(password))
    return "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character.";

  return null;
};
