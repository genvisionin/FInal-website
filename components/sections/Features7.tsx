"use client";
import Link from "next/link";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features7() {
  const swiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };

  return (
    <>
      <section id="Industry1" className="section-features-7 bg-neutral-100 section-padding">
        <div className="container">
          <div className="row mb-8 mb-lg-6">
            <div className="col-lg-6">
              <h3 className="ds-3 mt-3 mb-3">Research</h3>
              <p className="fs-5 fw-medium">
                Explore our research and see how we're advancing the boundaries
                of artificial intelligence
              </p>
            </div>
            <div className="col-lg-2 col-md-3 col-5 ms-auto align-self-end mb-lg-7">
              <div className="position-relative z-0">
                <div className="swiper-button-prev bg-white ms-lg-7">
                  <i className="bi bi-arrow-left" />
                </div>
                <div className="swiper-button-next bg-white">
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              {...swiperOptions}
              className="swiper slider-1 pb-3"
              modules={[Keyboard, Autoplay, Pagination, Navigation]}>
              <div className="swiper-wrapper">
                {/* prettier-ignore */}
                <SwiperSlide className="swiper-slide">
									<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
										<img className="rounded-top-3" src="/assets/Rimg3.png" alt="infinia" />
										
										<div className="card-body bg-white p-6">
											<h6 className="mb-3">Hyperspectral Image Processing and Analysis</h6>
											<p>This project delved into the HyperSpectral Images (HSIs) analysis to identify minerals within a given plot area represented by these images. An advanced Python package was developed to achieve this, leveraging state-of-the-art (SoTA) algorithms and techniques.</p>
											<Link href="https://www.datascienceportfol.io/gunjanhaldar/projects/0" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
												<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
													<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
												</svg>
											</Link>
										</div>
										<Link href="https://www.datascienceportfol.io/gunjanhaldar/projects/0" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
									</div>
								</SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
                    <img
                      className="rounded-top-3"
                      src="/assets/Rimg4.jpg"
                      alt="infinia"
                    />
                    <Link
                      href="#"
                      className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1"></Link>
                    <div className="card-body bg-white p-6">
                      <h6 className="mb-3">
                        CovidOps: AI-based centralized application
                      </h6>
                      <p>
                        Utilizing cough-voice data, Spectrograms, Spectral
                        Centroid, Zero Cross rate, Chroma Frequencies, Spectral
                        Roll-off, and MFCC will be extracted and preprocessed
                        using SMOTE, Autoencoders, and General Adversarial
                        Networks with a final model built using Gradient
                        Boosting Decision tree algorithm and ANN.
                      </p>
                      <Link
                        href="https://www.datascienceportfol.io/gunjanhaldar/projects/1"
                        className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">
                        Keep Reading
                        <svg
                          className="ms-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={14}
                          viewBox="0 0 24 14"
                          fill="none">
                          <path
                            className="fill-dark"
                            d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                            fill="black"
                          />
                        </svg>
                      </Link>
                    </div>
                    <Link
                      href="https://www.datascienceportfol.io/gunjanhaldar/projects/1"
                      className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
                    <img
                      className="rounded-top-3"
                      src="/assets/Rimg1.jpg"
                      alt="infinia"
                    />
                    <Link
                      href="#"
                      className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1"></Link>
                    <div className="card-body bg-white p-6">
                      <h6 className="mb-3">
                        Artificial Intelligence-based Predictive Analysis{" "}
                      </h6>
                      <p>
                        The problem is the need for an efficient and robust
                        communication channel in underground coal mines to
                        ensure the safety of the working environment. The paper
                        proposes using SAGES (Safety and Production Assurance in
                        Gas-Prone Coal Seams) to enhance security and
                        productivity during depillaring operations in
                        underground coal mines.
                      </p>
                      <Link
                        href="https://www.datascienceportfol.io/gunjanhaldar/projects/3"
                        className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">
                        Keep Reading
                        <svg
                          className="ms-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={14}
                          viewBox="0 0 24 14"
                          fill="none">
                          <path
                            className="fill-dark"
                            d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                            fill="black"
                          />
                        </svg>
                      </Link>
                    </div>
                    <Link
                      href="https://www.datascienceportfol.io/gunjanhaldar/projects/3"
                      className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
                    <img
                      className="rounded-top-3"
                      src="/assets/Rimg2.jpg"
                      alt="infinia"
                    />
                    <Link
                      href="#"
                      className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1"></Link>
                    <div className="card-body bg-white p-6">
                      <h6 className="mb-3">
                        SEC Filling Analyzer for SaaS Companies using
                        Unstructured EDGAR Dataset
                      </h6>
                      <p>
                        The project utilized tree-based models, specifically
                        decision trees, as part of an ensemble learning approach
                        to analyze financial texts in the EDGAR dataset.
                        Tree-based models are a class of machine learning
                        algorithms that construct decision trees to make
                        predictions or classifications.
                      </p>
                      <Link
                        href="https://www.datascienceportfol.io/gunjanhaldar/projects/4"
                        className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">
                        Keep Reading
                        <svg
                          className="ms-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={14}
                          viewBox="0 0 24 14"
                          fill="none">
                          <path
                            className="fill-dark"
                            d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z"
                            fill="black"
                          />
                        </svg>
                      </Link>
                    </div>
                    <Link
                      href="https://www.datascienceportfol.io/gunjanhaldar/projects/4"
                      className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
                    />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
