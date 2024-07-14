const ContactForm = async () => {
  return (
    <div className="holder">
      <div className="container">
        <div className="row vert-margin">
          <div className="col-sm-9">
            <div className="title-wrap">
              <h2 className="h1-style">Get In Touch With Us</h2>
              <div>
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because
                occasionally in which toil and pain
              </div>
            </div>
            <form
              data-toggle="validator"
              className="contact-form"
              id="contactForm"
            >
              <div className="form-confirm">
                <div className="success-confirm">
                  Thanks! Your message has been sent. We will get back to you
                  soon!
                </div>
                <div className="error-confirm">
                  Oops! There was an error submitting form. Refresh and send
                  again.
                </div>
              </div>
              <div className="form-group">
                <div className="row vert-margin-middle">
                  <div className="col-lg">
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control--sm"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-lg">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control form-control--sm"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row vert-margin-middle">
                  <div className="col-lg">
                    <input
                      type="text"
                      name="email"
                      className="form-control form-control--sm"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-lg">
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control--sm"
                      placeholder="Phone"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control form-control--sm textarea--height-200"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button className="btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-sm-9">
            <div className="contact-map">
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2201.3258493677126!2d-74.01291322172017!3d40.70657451080482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1492962272380"></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248755.79476471696!2d80.04420068111189!3d13.04780780904633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720956146478!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
