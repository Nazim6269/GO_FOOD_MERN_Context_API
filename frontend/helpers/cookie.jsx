export const setCookie = (token) => {
  const currentTime = new Date();
  const expirationTime = new Date(currentTime.getTime() + 20 * 60 * 60 * 1000);
  document.cookie =
    "myCookie =" +
    token +
    "; expires=" +
    expirationTime.toUTCString() +
    "; path=/";
};

export const deleteCookie = (cookieName) => {
  const expirationTime = new Date();
  expirationTime.setFullYear(expirationTime.getFullYear() - 1);
  document.cookie =
    cookieName + "=; expires=" + expirationTime.toUTCString() + "; path=/";
};
