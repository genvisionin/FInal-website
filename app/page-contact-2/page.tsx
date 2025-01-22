"use client";

import Layout from "@/components/layout/Layout";
import { useEffect } from "react";

export default function PageContact2() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <section className="section-contact position-relative section-padding fix">
        <div className="container position-relative z-1">
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay={100}>
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                Get in Touch
              </span>
            </div>
            <h3 className="ds-3 mt-3 mb-3">
              Your AI Transformation Starts Here
            </h3>
            <p className="fs-5">
              Schedule a meeting or leave us a message to explore how we can
              help your business grow
            </p>
          </div>
          <div className="row mt-8 d-flex">
            {/* Calendly Widget */}
            <div className="col-lg-6">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/tech-kerrsor/30min"
                style={{
                  minWidth: "320px",
                  height: "700px",
                }}></div>
            </div>
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="form-container">
                <h4>Leave a message</h4>
                <form
                  action="https://formsubmit.co/tech@kerrsor.com"
                  method="POST">
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="input-group d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your name *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group d-flex align-items-center mt-4 mt-md-0">
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Phone *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group d-flex align-items-center mt-4">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group d-flex align-items-center mt-4">
                        <input
                          type="text"
                          className="form-control"
                          name="company"
                          placeholder="Company"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group d-flex mt-4">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Your message...."
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <input
                        type="hidden"
                        name="_subject"
                        value="New Contact Form Submission"
                      />
                      <input type="hidden" name="_captcha" value="false" />
                      <input
                        type="hidden"
                        name="_autoresponse"
                        value="Thank you for contacting us. We will get back to you shortly."
                      />
                      <button
                        type="submit"
                        className="btn bg-primary text-white hover-up mt-4">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
