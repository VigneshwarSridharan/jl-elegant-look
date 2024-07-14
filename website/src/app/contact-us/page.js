import { ENDPOINTS } from "@/constants";
import APIService from "@/lib/APIService";
import { getAsset } from "@/lib/utils/functions";
import { get, set } from "lodash";
import { cache } from "react";
import Markdown from "react-markdown";
import ContactForm from "./components/ContactForm";

export const getData = cache(async (params) => {
  const res = await APIService.get(ENDPOINTS.COMMON, {
    params: params || {
      populate: "*",
    },
  });

  const data = get(res, "data.data.attributes");

  return data;
});

const fetchContactUsData = cache(async () => {
  const res = await APIService.get(ENDPOINTS.CONTACT_US, {
    params: {
      populate: ["seo", "seo.image"],
    },
  }).then((res) => res.data);

  const contactUsDetails = get(res, "data.attributes") || {};
  set(contactUsDetails, "id", get(contactUsDetails, "id"));

  return contactUsDetails;
});

const ContactUs = async () => {
  const siteDetails = await getData();
  const contactUsDetails = await fetchContactUsData();
  const { address, PhoneNumbers, emailAddresses, socialMedia, logo } =
    siteDetails;
  return (
    <>
      <div
        className="holder mt-0 py-3 py-sm-5 py-md-10 bg-cover "
        style={{
          backgroundImage: `url(${getAsset(contactUsDetails.seo.image)})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-9 col-xl-9">
              <div className="page-title-bg py-md-3">
                <h1>{contactUsDetails.seo.title}</h1>
                <Markdown>{contactUsDetails.content}</Markdown>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="holder">
        <div className="container">
          <div className="title-wrap text-center">
            <h2 className="h1-style">Our Information</h2>
            <p className="h-sub maxW-825">
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself, because it is pain, but because
              occasionally in which toil and pain
            </p>
          </div>
          <div className="text-icn-blocks-row">
            <div className="text-icn-block-hor">
              <div className="icn">
                <i className="icon-location"></i>
              </div>
              <div className="text">
                <h4>Address:</h4>
                <p>{address}</p>
              </div>
            </div>
            <div className="text-icn-block-hor">
              <div className="icn">
                <i className="icon-phone"></i>
              </div>
              <div className="text">
                <h4>Phone:</h4>
                <p>
                  {PhoneNumbers.map((item) => (
                    <a href={`tel:${item.value}`} key={item.id}>
                      {item.value}
                    </a>
                  ))}
                </p>
              </div>
            </div>
            <div className="text-icn-block-hor">
              <div className="icn">
                <i className="icon-info"></i>
              </div>
              <div className="text">
                <h4>Hours:</h4>
                <p>
                  Hours: 7 Days a week
                  <br />
                  09:00am to 5:00pm
                </p>
              </div>
            </div>
            <div className="text-icn-block-hor">
              <div className="icn">
                <i className="icon-call-center"></i>
              </div>
              <div className="text">
                <h4>Email:</h4>
                <p>
                  {emailAddresses.map((item) => (
                    <a href={`mailto:${item.value}`} key={item.id}>
                      {item.value}
                    </a>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  );
};

export default ContactUs;
