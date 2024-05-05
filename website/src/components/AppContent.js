import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { API_URL, ENDPOINTS } from "@/constants";
import { get } from "lodash";

const fetchData = async () => {
  const res = await fetch(`${API_URL}${ENDPOINTS.COMMON}?populate=*`, {
    cache: "force-cache",
  }).then((res) => res.json());

  const data = get(res, "data.attributes");

  console.log("fetchData", data);

  return data;
};

const AppContent = async ({ children }) => {
  const siteDetails = await fetchData();
  const { siteName, address, favicon, logo } = siteDetails;
  console.log("siteName", siteName);
  return (
    <body className="has-smround-btns has-loader-bg equal-height has-sticky">
      <Header />

      <div className="page-content">{children}</div>
      <Footer />
    </body>
  );
};

export default AppContent;
