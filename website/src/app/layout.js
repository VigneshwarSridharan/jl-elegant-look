import { cache } from "react";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import APIService from "@/lib/APIService";
import { ENDPOINTS } from "@/constants";
import { get } from "lodash";
import AppContext from "@/lib/context/AppContext";
import { getAsset } from "@/lib/utils/functions";
import { CartStoreProvider } from "@/providers/cart-store-provider";

export const revalidate = 0;

export const getData = cache(async (params) => {
  const res = await APIService.get(ENDPOINTS.COMMON, {
    params: params || {
      populate: "*",
    },
  });

  const data = get(res, "data.data.attributes");

  return data;
});

export const generateMetadata = async () => {
  const params = {
    fields: ["siteName"],
    populate: ["seo", "seo.image"],
  };
  const siteDetails = await getData(params);
  const { siteName, seo } = siteDetails;
  const { title = "", description = "", image } = seo || {};

  const imageURL = getAsset(image);

  return {
    title: title || siteName,
    description: description,
    openGraph: {
      image: imageURL,
    },
  };
};

export default async function RootLayout({ children }) {
  const siteDetails = await getData();
  const { siteName, address, favicon, logo } = siteDetails;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={getAsset(favicon)}
        />
        {/* <!-- Vendor CSS --> */}
        <link href="/css/vendor/bootstrap.min.css" rel="stylesheet" />
        {/* <!-- Latest compiled and minified CSS --> */}
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css"
          integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
          crossorigin="anonymous"
        ></link> */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link href="/css/vendor/vendor.min.css" rel="stylesheet" />
        {/* <!-- Custom styles for this template --> */}
        <link href="/css/style.css" rel="stylesheet" />
        {/* <!-- Custom font --> */}
        <link href="/fonts/icomoon/icons.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open%20Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="has-smround-btns has-loader-bg equal-height has-sticky">
        <CartStoreProvider>
          <Header context={siteDetails} />

          <div className="page-content">{children}</div>
          <Footer context={siteDetails} />
        </CartStoreProvider>
        {/* <script src="/js/vendor-special/lazysizes.min.js"></script>
        <script src="/js/vendor-special/ls.bgset.min.js"></script>
        <script src="/js/vendor-special/ls.aspectratio.min.js"></script>
        <script src="/js/vendor-special/jquery.min.js"></script>
        <script src="/js/vendor-special/jquery.ez-plus.js"></script>
        <script src="/js/vendor-special/instafeed.min.js"></script>
        <script src="/js/vendor/vendor.min.js"></script>
        <script src="/js/app-html.js"></script> */}
      </body>
    </html>
  );
}
