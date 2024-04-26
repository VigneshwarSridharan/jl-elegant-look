import Image from "next/image";
import styles from "./page.module.css";
import Slider from "./components/Slider";
import Collections from "./components/Collections";

export default function Home() {
  return (
    <>
      <Slider />

      <div className="holder holder-mt-xsmall">
        <div className="container">
          <div className="row vert-margin-small">
            <div className="col-sm">
              <a
                href="category.html"
                className="collection-grid-3-item image-hover-scale"
              >
                <div
                  className="collection-grid-3-item-img image-container"
                  style={{ paddingBottom: "93.68%" }}
                >
                  <img
                    src="https://source.unsplash.com/random/720x675?girls-fashion$1"
                    alt="Banner"
                  />
                  {/* <img
                    src="https://source.unsplash.com/random/?Cryptocurrency&1"
                    alt="Banner"
                  /> */}
                  {/* <div className="foxic-loader"></div> */}
                </div>
                <div className="collection-grid-3-caption-bg">
                  <h3 className="collection-grid-3-title">Accessories</h3>
                  <h4 className="collection-grid-3-subtitle">
                    The&nbsp;Best&nbsp;Look&nbsp;Anywhere
                  </h4>
                </div>
              </a>
            </div>
            <div className="col-sm">
              <a
                href="category.html"
                className="collection-grid-3-item image-hover-scale"
              >
                <div
                  className="collection-grid-3-item-img image-container"
                  style={{ paddingBottom: "93.68%" }}
                >
                  <img
                    src="https://source.unsplash.com/random/720x675?fashion%20girl$2"
                    alt="Banner"
                  />
                </div>
                <div className="collection-grid-3-caption-bg">
                  <h3 className="collection-grid-3-title">Fashion</h3>
                  <h4 className="collection-grid-3-subtitle">
                    Live&nbsp;According&nbsp;to&nbsp;Fashion
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Collections />
    </>
  );
}
