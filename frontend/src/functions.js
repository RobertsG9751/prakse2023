export const parseJwt = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

export const logout = () => {
  localStorage.setItem("pageView", "Home");
  localStorage.removeItem("user_data");
  window.location.replace("https://prakse2023-frontend.vercel.app/");
  console.log("logged out");
};
