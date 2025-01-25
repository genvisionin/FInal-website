"use client";
import Link from "next/link";

export default function Testimonial1() {
  return (
    <>
      <section className="section-testimonial-1 pb-120 @@classList position-relative">
        <div className="container position-relative z-1">
          <div className="row">
            <div className="col-lg-4">
              <div className="pe-8 mt-10">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}>
                  <img src="/assets/imgs/features-1/dots.png" alt="kerrsor" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Testimonials
                  </span>
                </div>
                <h3
                  className="ds-3 mt-3 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}>
                  What our clients say
                </h3>
                <span
                  className="fs-5 fw-medium"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}>
                  See How we've helped businesses across industries transform
                  with AI
                </span>
                <div className="d-flex flex-wrap align-items-center mt-8"></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-neutral-100 p-5 mt-8 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={100}>
                <p className="text-900">
                  We were able to scrape and organize 94% of our product review data efficiently. 
                  Their advanced clustering and analytics techniques delivered high-quality datasets, 
                  giving us actionable insights and improving our decision-making process significantly
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/Person icon.png"
                    alt="kerrsor"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">Richard Olsen</h6>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
              <div
                className="bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={200}>
                <p className="text-900">
                  We wanted a custom AI chatbot tailored to our brand and
                  business requirements, and this team delivered beyond what we
                  imagined. The project was completed swiftly, with a focus on
                  quality and innovation. Highly recommend their services!
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/Person icon.png"
                    alt="kerrsor"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">Emily Johnson</h6>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={300}>
                <p className="text-900">
                  Their predictive analysis and defect detection system
                  transformed our approach to power line maintenance. The team's
                  expertise and speed were remarkable, and the solution has
                  already made a significant impact.
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/Person icon.png"
                    alt="kerrsor"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">Wei Zhang</h6>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
              <div
                className="bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={400}>
                <p className="text-900">
                  Their comprehensive AI services were a game- changer for our
                  business. From planning to deployment, the team worked
                  efficiently and delivered a tailored solution that fit our
                  needs perfectly
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/Person icon.png"
                    alt="kerrsor"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">Arjun Raj</h6>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 start-0 z-0">
          <img src="/assets/imgs/testimonial-1/bg-line.png" alt="kerrsor" />
        </div>
      </section>
    </>
  );
}
