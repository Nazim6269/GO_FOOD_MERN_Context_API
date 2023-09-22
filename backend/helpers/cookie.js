const setAccessTokenCookie = (res, accessToken) => {
  res.cookie("accessToken", accessToken, {
    maxAge: 1 * 60 * 1000,
    httpOnly: true,
    sameSite: "none",
  });
};

module.exports = { setAccessTokenCookie };
