"use client";
import Link from "next/link";
import { useState } from "react";

export default function Pricing3() {
  // Price Plan
  const [activePlan, setActivePlan] = useState("monthly");

  const handlePlanChange = (planType: any) => {
    setActivePlan(planType);
  };

  const getPrices = () => {
    if (activePlan === "monthly") {
      return {
        standardPrice: "4000",
        standardType: "/ month",
        businessPrice: "69",
        businessType: "/ month",
        enterprisePrice: "99",
        price: "2000",
        enterpriseType: "/ month",
      };
    } else {
      return {
        standardPrice: "441",
        standardType: "/ year",
        businessPrice: "621",
        businessType: "/ year",
        enterprisePrice: "891",
        enterpriseType: "/ year",
      };
    }
  };

  const prices = getPrices();

  return (
    <>
      <section className="section-pricing-2 position-relative fix section-padding">
        <div className="container position-relative z-2">
          <div className="text-center mb-8">
            <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
              <img src="/assets/imgs/features-1/dots.png" alt="kerrsor" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                Our Plans
              </span>
            </div>
            <h3 className="ds-3 my-3 fw-bold">
              Simple {" "}
              <span className=" fw-regular">
                Pricing <br className="d-none d-lg-inline" />
                Exceptional{" "}
              </span>
              Value
            </h3>
            <p className="fs-5 mb-0">
              Choose a plan that fits your needs and budget. From startups to
              enterprises, we've got you covered{" "}
            </p>
            <div className="d-flex justify-content-center mt-5"></div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3 col-md-12 px-lg-0 mb-lg-0 mb-4 ">
              <div className="p-6 bg-white position-relative border rounded-4 z-1 rounded-end-lg-0">
                <h6>Starter</h6>
                <p className="fs-7">
                  Perfect for smaller projects and essential AI integrations
                </p>

                <div className="d-flex">
                  <span className="fs-5 text-600 me-1">$</span>
                  <h3 className="text-primary mb-0 text-price-enterprise">
                    {prices.price}
                  </h3>
                  <span className="fs-5 text-600 ms-1 fw-bold align-self-end text-type-enterprise">
                    {prices.enterpriseType}
                  </span>
                </div>

                <Link
                  href="/page-contact-2"
                  className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
                  Book a Slot Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                      className="fill-dark"
                      d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z"
                      fill="#111827"
                    />
                  </svg>
                </Link>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center mb-4">
                    <img
                      src="/assets/imgs/pricing-1/check-primary.svg"
                      alt="kerrsor"
                    />
                    <h6 className="fs-6 mb-0 ms-2">AI model integration</h6>
                  </li>
                  <li className="d-flex align-items-center mb-4">
                    <img
                      src="/assets/imgs/pricing-1/check-primary.svg"
                      alt="kerrsor"
                    />
                    <h6 className="fs-6 mb-0 ms-2">Chatbot Development</h6>
                  </li>
                  <li className="d-flex align-items-center mb-4">
                    <img
                      src="/assets/imgs/pricing-1/check-primary.svg"
                      alt="kerrsor"
                    />
                    <h6 className="fs-6 mb-0 ms-2">
                    Foundational Research & Prototyping
                    </h6>
                  </li>
                  <li className="d-flex align-items-center mb-4">
                    <img
                      src="/assets/imgs/pricing-1/check-primary.svg"
                      alt="kerrsor"
                    />
                    <h6 className="fs-6 mb-0 ms-2">
                    Data Scraping and Visualization
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-lg-0 mb-4 px-lg-0">
              <div className="p-8 bg-linear-2 position-relative border rounded-4 z-1 border-start-lg-0">
                <div className="position-absolute top-0 end-0 z-0">
                  <img
                    src="/assets/imgs/pricing-3/bg-line-1.png"
                    alt="kerrsor"
                  />
                </div>
                <div className="position-relative z-1">
                  <h6 className="text-white">Growth</h6>
                  <p className="fs-7 text-white">
                    All-inclusive services to supercharge your business with AI
                  </p>
                  <div className="d-flex">
  <span className="fs-2 me-1 text-white">$</span>
  <h3 className="m-0 text-price-standard fw-black text-white">
    {prices.standardPrice}
  </h3>
  <span className="text-type-standard ms-1 fw-bold align-self-end text-white">
    {prices.standardType}
  </span>
</div>

<style jsx>{`
  .text-type-standard {
    font-size: 1rem; /* Makes the /month text smaller */
    line-height: 2; /* Ensures alignment with the main price */
  }
`}</style>

                  <ul className="list-unstyled mb-0 mt-3">
                    <li className="d-flex align-items-center mb-4">
                      <img
                        src="/assets/imgs/pricing-3/check-white.svg"
                        alt="kerrsor"
                      />
                      <h6 className="fs-6 mb-0 ms-2 text-white">
                      Deep Neural Solutions
                      </h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img
                        src="/assets/imgs/pricing-3/check-white.svg"
                        alt="kerrsor"
                      />
                      <h6 className="fs-6 mb-0 ms-2 text-white">
                        Smart AI-Powered Applications
                      </h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img
                        src="/assets/imgs/pricing-3/check-white.svg"
                        alt="kerrsor"
                      />
                      <h6 className="fs-6 mb-0 ms-2 text-white">
                      Data Labeling & Optimization
                      </h6>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <img
                        src="/assets/imgs/pricing-3/check-white.svg"
                        alt="kerrsor"
                      />
                      <h6 className="fs-6 mb-0 ms-2 text-white">
                        Advanced automation and predictive analysis
                      </h6>
                    </li>
                  </ul>
                  <Link
                    href="/page-contact-2"
                    className="btn bg-white-keep text-primary hover-up w-100 d-flex justify-content-between mt-5">
                    Book a Slot Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z"
                        fill="#6d4df2"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 px-lg-0 mb-lg-0 mb-4">
              <div
                className="p-6 bg-white position-relative border rounded-4 z-1 border-start-lg-0 rounded-start-lg-0"
                style={{
                  minHeight: "530px", // Increased minimum height
                  display: "flex", // Ensures content is centered
                  flexDirection: "column", // Keeps content stacked vertically
                  justifyContent: "space-between", // Spaces out the content
                  gap: "10px",
                }}>
                <h6 style={{ marginBottom: "8px" }}>Tailored</h6>
                <p className=" fs-7" style={{ marginBottom: "12px" }}>
                  Custom Al and tech solutions designed to meet your unique
                  requirements, including full-stack development, DevOps
                  integration, and other specialized needs.
                </p>

                <Link
                  href="/page-contact-2"
                  className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5"
                  style={{ marginTop: "16px" }}>
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                      className="fill-dark"
                      d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z"
                      fill="#111827"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-10">
            <div className="d-flex align-items-center justify-content-lg-cener justify-content-center"></div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/pricing-3/bg-line-2.png" alt="kerrsor" />
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute top-50 z-1" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute top-50 z-1" />
      </section>
    </>
  );
}
