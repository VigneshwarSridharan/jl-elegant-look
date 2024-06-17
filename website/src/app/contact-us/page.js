import { ENDPOINTS } from "@/constants";
import APIService from "@/lib/APIService";
import { get } from "lodash";
import { cache } from "react";

export const getData = cache(async (params) => {
  const res = await APIService.get(ENDPOINTS.COMMON, {
    params: params || {
      populate: "*",
    },
  });

  const data = get(res, "data.data.attributes");

  return data;
});

const ContactUs = async () => {
  const siteDetails = await getData();
  const { address, PhoneNumbers, emailAddresses, socialMedia, logo } =
    siteDetails;
  return (
    <>
      <div
        className="holder mt-0 py-3 py-sm-5 py-md-10 bg-cover "
        data-bgset="images/pages/contact-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-9 col-xl-9">
              <div className="page-title-bg py-md-3">
                <h1>CONTACT US</h1>
                <p>
                  No one rejects, dislikes, or avoids pleasure itself, because
                  it is pleasure, but because those who do not know how to
                  pursue pleasure rationally
                </p>
                <p>
                  Have a great question, comment or concern? Simply fill out the
                  form below and click Submit. We will respond to all inquiries
                  within 48 business hours.Check out our
                  <a href="faq.html">Frequently Asked Questions</a>.
                </p>
                <blockquote className="d-none d-md-block mt-3 mt-lg-6">
                  <div>
                    You can never take too much care over the choice of your
                    shoes. Too many women think that they are unimportant, but
                    the real proof of an elegant woman is what is on her feet.
                  </div>
                  <div className="blockquote-author">
                    <a href="#">– Christian Dior</a>
                  </div>
                </blockquote>
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
    </>
  );
};

export default ContactUs;
