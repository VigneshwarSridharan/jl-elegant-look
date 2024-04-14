import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "JL Elegant Look",
  description:
    "JL Elegant Look specializes in crafting exquisite and sophisticated costumes, perfect for elevating any special occasion with timeless elegance and style. Our attention to detail and commitment to quality ensure that every garment embodies luxury and grace.",
};

export default function RootLayout({ children }) {
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
        <title>Foxic HTML Template - Index Page</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon.ico"
        />
        {/* <!-- Vendor CSS --> */}
        <link href="/css/vendor/bootstrap.min.css" rel="stylesheet" />
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
      <body className="has-smround-btns has-loader-bg equal-height">
        <Header />
        {children}
      </body>
    </html>
  );
}
