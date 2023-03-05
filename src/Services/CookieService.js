import Cookie from "js-cookie";
let CookieSetUp = {
  set: (key, value, expires) => {
    Cookie.set(key, value, {
      expires: expires,
    });
  },
  get: (key) => {
    return Cookie.get(key);
  },
  remove: (key) => {
    Cookie.remove(key);
  },
};
export default CookieSetUp;
