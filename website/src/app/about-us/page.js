import { cache } from "react";
import { ENDPOINTS } from "@/constants";
import APIService from "@/lib/APIService";
import { getAsset } from "@/lib/utils/functions";
import { get, set } from "lodash";
import Markdown from "react-markdown";

const fetchData = cache(async () => {
  const res = await APIService.get(ENDPOINTS.ABOUT_US, {
    params: {
      populate: ["seo", "seo.image"],
    },
  }).then((res) => res.data);

  const aboutUsDetails = get(res, "data.attributes") || {};
  set(aboutUsDetails, "id", get(aboutUsDetails, "id"));

  return aboutUsDetails;
});

export const generateMetadata = async () => {
  const siteDetails = await fetchData();
  const { seo } = siteDetails;
  const { title = "", description = "", image } = seo || {};

  const imageURL = getAsset(image);

  return {
    title: title,
    description: description,
    openGraph: {
      image: imageURL,
    },
  };
};

const AboutUs = async () => {
  const aboutUsDetails = await fetchData();

  return (
    <>
      <div
        className="holder mt-0 py-3 py-sm-5 py-md-10 bg-cover"
        style={{
          backgroundImage: `url(${getAsset(aboutUsDetails.seo.image)})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-11 col-md-9 col-xl-9">
              <div className="page-title-bg py-md-3 py-xl-6">
                <h1>{aboutUsDetails.seo.title}</h1>
                <Markdown>{aboutUsDetails.content}</Markdown>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="holder">
        <div className="container">
          <div className="title-wrap text-center">
            <h2 className="h1-style">Why Shop With Us?</h2>
          </div>
          <div className="text-icn-blocks-row">
            <div className="text-icn-block">
              <div className="icn">
                <i className="icon-shopping-1"></i>
              </div>
              <div className="text">Complete buyer supply store</div>
            </div>
            <div className="text-icn-block">
              <div className="icn">
                <i className="icon-box-1"></i>
              </div>
              <div className="text">Same day dispatch on all orders</div>
            </div>
            <div className="text-icn-block">
              <div className="icn">
                <i className="icon-delivery-truck"></i>
              </div>
              <div className="text">Free delivery on all orders</div>
            </div>
            <div className="text-icn-block">
              <div className="icn">
                <i className="icon-call-center"></i>
              </div>
              <div className="text">Professional advice and great support</div>
            </div>
            <div className="text-icn-block d-none d-sm-block">
              <div className="icn">
                <i className="icon-tag"></i>
              </div>
              <div className="text">Fall savings are in the air</div>
            </div>
          </div>
        </div>
      </div>

      <div className="holder py-4 py-md-7 bgcolor">
        <div className="container">
          <div className="row fact-blocks-row lazyload">
            <div className="col-sm-6">
              <div className="fact-block">
                <div className="number">
                  <span>90</span>%
                </div>
                <div className="title">Of excellent reviews</div>
                <div className="text">
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally in which toil and pain can procure
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="fact-block">
                <div className="number js-count-to">
                  <span>1545</span>
                </div>
                <div className="title">More sales</div>
                <div className="text">
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally in which toil and pain can procure
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="fact-block">
                <div className="number js-count-to">
                  <span>100</span>%
                </div>
                <div className="title">Happy customers</div>
                <div className="text">
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally in which toil and pain can procure
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
