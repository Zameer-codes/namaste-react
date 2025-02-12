import { EMAIL_INVALID_MESSAGE, PASSWORD_INVALID_MESSAGE } from "./constants";

export const validateLoginForm = (email, password) => {
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!emailValidation.test(email)) return EMAIL_INVALID_MESSAGE;
  if (!passwordValidation.test(password)) return PASSWORD_INVALID_MESSAGE;

  return null;
};

export const Api_Get_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_APIREADACCESSTOKEN}`,
  },
};
