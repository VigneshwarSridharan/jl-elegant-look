const { ASSETS_URL } = require("@/constants");
const { get } = require("lodash");

export const getAsset = (arg) => {
  let asserURL = ASSETS_URL;
  if (typeof arg === "string") {
    return asserURL + arg;
  }
  return (
    asserURL + (get(arg, "data.attributes.url") || get(arg, "attributes.url"))
  );
};
