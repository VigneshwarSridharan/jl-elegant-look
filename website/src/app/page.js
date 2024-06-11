import { cache } from "react";
import Slider from "./components/Slider";
import Collections from "./components/Collections";
import { ENDPOINTS } from "@/constants";
import { get } from "lodash";
import APIService from "@/lib/APIService";

export const getData = cache(async (params) => {
  const res = await APIService.get(ENDPOINTS.COMMON, {
    params: params || {
      populate: "*",
    },
  });

  const data = get(res, "data.data.attributes");

  return data;
});

export default async function Home() {
  const params = {
    populate: ["banners"],
  };
  const { banners } = await getData(params);
  console.log("banners", banners);
  return (
    <>
      <Slider banners={banners.data} />

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
                  <img src="/images/categories/category-1.png" alt="Banner" />
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
                  <img src="/images/categories/category-2.png" alt="Banner" />
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
