"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Services4() {
  const [activeTab, setActiveTab] = useState("v-pills-financial"); // Default active tab

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <section className="section-services-4 position-relative fix section-padding">
        <div className="container position-relative z-2">
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay={100}>
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                What we offer
              </span>
            </div>
            <h3 className="ds-3 my-3 fw-regular">
              Redefine{" "}
              <span className=" fw-bold">
                Business Potential <br className="d-none d-md-inline" />{" "}
              </span>
              with our <span className="fw-bold">AI</span> Expertise
            </h3>
          </div>
          <div className="row pt-8">
            <div className="col-lg-4">
              <div className="d-flex align-items-start">
                <div
                  className="nav w-100 flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical">
                  {[
                    {
                      id: "v-pills-financial",
                      label: "Custom AI Models and Enterprise",
                    },
                    {
                      id: "v-pills-business",
                      label: "Automation & Predictive Analysis",
                    },
                    {
                      id: "v-pills-solicitory",
                      label: "AI Application Development",
                    },
                    {
                      id: "v-pills-hr-consultancy",
                      label: "Annotation & Model Optimization",
                    },
                    { id: "v-pills-strategy", label: "AI Models Integrations" },
                    {
                      id: "v-pills-start-up",
                      label: "RAG: Data to LLM Transformation",
                    },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      className={`nav-link pe-5 justify-content-between d-flex ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(tab.id)}
                      type="button"
                      role="tab"
                      aria-controls={tab.id}
                      aria-selected={activeTab === tab.id}>
                      {tab.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none">
                        <path
                          className="fill-white"
                          d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade ${
                    activeTab === "v-pills-financial" ? "show active" : ""
                  }`}
                  id="v-pills-financial"
                  role="tabpanel"
                  tabIndex={0}>
                  <div className="row align-items-center rounded-3 bg-white p-5">
                    <div className="col-lg-5 mb-lg-0 mb-5">
                      <img
                        className="rounded-3"
                        src="/assets/images/Custom AI models for Enterprise .jpeg"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-7">
                      <div className="p-lg-3">
                        <h4 className="fw-regular">
                          Industry-specific LLMs tailored to power your business
                          operations
                        </h4>
                        <p>
                          Fine-tune LLMs to suit your industry or business
                          niche. These custom models are designed to seamlessly
                          integrate into your workflows, delivering exceptional
                          performance and value tailored to your specific
                          requirements.
                        </p>
                      </div>
                      <div className="d-flex pt-5">
                        <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                          <div className="icon">
                            <img
                              src="/assets/icons/Group (1).png"
                              alt="infinia"
                            />
                          </div>
                        </div>
                        <div className="ps-5">
                          <h6>Data Preprocessing</h6>
                          <p>
                            Clean, structure, and <br /> prepare your raw data
                            for AI readiness
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                          <div className="icon">
                            <img src="/assets/icons/Group1.png" alt="infinia" />
                          </div>
                        </div>
                        <div className="ps-5">
                          <h6>SLM / LLM Customization</h6>
                          <p>
                            Develop and fine-tune models
                            <br /> tailored to your domain and goals
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "v-pills-business" ? "show active" : ""
                  }`}
                  id="v-pills-business"
                  role="tabpanel"
                  aria-labelledby="v-pills-business-tab"
                  tabIndex={0}>
                  <div className="row align-items-center rounded-3 bg-white p-5">
                    <div className="col-lg-5 mb-lg-0 mb-5">
                      <img
                        className="rounded-3"
                        src="/assets/images/Automation & Predictive Analytics.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-7">
                      <div className="p-lg-3">
                        <h4 className="fw-regular">
                          Automate workflows and forecast outcomes with
                          precision
                        </h4>
                        <p>
                          Automate repetitive tasks and provide data-driven
                          predictions to streamline operations and empower
                          decision-making.
                        </p>
                        <div className="d-flex pt-5">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/icons/Group (2).png"
                                alt="Process Automation Icon"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Process Automation</h6>
                            <p>
                              Design intelligent workflows to minimize <br />{" "}
                              manual tasks and improve efficiency.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/icons/Vector.png"
                                alt="Trend Analysis Icon"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Trend Analysis</h6>
                            <p>
                              Build predictive models to identify <br />{" "}
                              patterns and future opportunities.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "v-pills-solicitory" ? "show active" : ""
                  }`}
                  id="v-pills-solicitory"
                  role="tabpanel"
                  aria-labelledby="v-pills-solicitory-tab"
                  tabIndex={0}>
                  <div className="row align-items-center rounded-3 bg-white p-5">
                    <div className="col-lg-5 mb-lg-0 mb-5">
                      <img
                        className="rounded-3"
                        src="/assets/images/Application development.png"
                        alt="Operational Enhancement"
                      />
                    </div>
                    <div className="col-lg-7">
                      <div className="p-lg-3">
                        <h4 className="fw-regular">
                          Deliver AI-powered apps to solve real-world challenges
                        </h4>
                        <p>
                          AI applications for web and mobile, integrating smart
                          functionalities to enhance user engagement, experience
                          and operational impact.
                        </p>
                        <div className="d-flex pt-5">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/icons/Vector (1).png"
                                alt="Research Planning Icon"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Custom web & mobile App Design</h6>
                            <p>
                              Build AI-driven apps tailored <br /> to your
                              specific business needs.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/icons/Group (3).png"
                                alt="Investment Icon"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>LLM-Powered Chatbots</h6>
                            <p>
                              Develop interactive assistants <br /> for seamless
                              customer experiences.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "v-pills-hr-consultancy" ? "show active" : ""
                  }`}
                  id="v-pills-hr-consultancy"
                  role="tabpanel"
                  aria-labelledby="v-pills-hr-consultancy-tab"
                  tabIndex={0}>
                  <div className="row align-items-center rounded-3 bg-white p-5">
                    <div className="col-lg-5 mb-lg-0 mb-5">
                      <img
                        className="rounded-3"
                        src="/assets/images/Data Annotation & Model Optimization.jpg"
                        alt="Sustainable Growth"
                      />
                    </div>
                    <div className="col-lg-7">
                      <div className="p-lg-3">
                        <h4 className="fw-regular">
                          Ensure high-quality training data and optimized AI
                          models
                        </h4>
                        <p>
                          Accurate data labeling and continuous model
                          optimization to improve your AI systems’ performance
                          and reliability.
                        </p>
                        <div className="d-flex pt-5">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/icons/Vector (2).png"
                                alt="Research Planning Icon"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Annotation Services</h6>
                            <p>
                              Label datasets accurately <br /> to improve AI
                              training quality.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/icons/Vector (3).png"
                                alt="Investment Icon"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Model Fine-Tuning</h6>
                            <p>
                              Enhance model performance <br /> with iterative
                              optimization and testing
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "v-pills-strategy" ? "show active" : ""
                  }`}
                  id="v-pills-strategy"
                  role="tabpanel"
                  aria-labelledby="v-pills-strategy-tab"
                  tabIndex={0}>
                  <div className="row align-items-center rounded-3 bg-white p-5">
                    <div className="col-lg-5 mb-lg-0 mb-5">
                      <img
                        className="rounded-3"
                        src="/assets/images/AI Models Integration.jpg"
                        alt="Continuous Evolution"
                      />
                    </div>
                    <div className="col-lg-7">
                      <div className="p-lg-3">
                        <h4 className="fw-regular">
                          Seamlessly integrate AI models into your applications.
                        </h4>
                        <p>
                          Integrate both open-source and proprietary AI models
                          into your workflows and applications. Whether it’s
                          text, image, or video-based models, we ensure smooth
                          implementation tailored to your specific business
                          needs.
                        </p>
                        <div className="d-flex pt-5">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/icons/Vector (4).png"
                                alt="Research Planning Icon"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Text models</h6>
                            <p>
                              Integrate models like ChatGPT, Google Gemini,
                              Llama and <br /> other cutting-edge LLMs for
                              enhanced functionality.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/icons/Vector (5).png"
                                alt="Investment Icon"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Image and Video Models</h6>
                            <p>
                              Work with image models like Stable Diffusion,
                              MidJourney, and <br /> Flux, or video-generation
                              models to power your applications.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "v-pills-start-up" ? "show active" : ""
                  }`}
                  id="v-pills-start-up"
                  role="tabpanel"
                  aria-labelledby="v-pills-start-up-tab"
                  tabIndex={0}>
                  <div className="row align-items-center rounded-3 bg-white p-5">
                    <div className="col-lg-5 mb-lg-0 mb-5">
                      <img
                        className="rounded-3"
                        src="/assets/images/RAG.jpg"
                        alt="Empower Businesses"
                      />
                    </div>
                    <div className="col-lg-7">
                      <div className="p-lg-3">
                        <h4 className="fw-regular">
                          Empower your LLMs with real-time data refinement and
                          retrieval
                        </h4>
                        <p>
                          Leverage Retrieval-Augmented Generation (RAG) to
                          ensure your LLMs remain accurate and relevant. By
                          integrating real-time data refinement, retrieval
                          systems, and vector database support, we help you
                          unlock the full potential of your AI models.
                        </p>
                        <div className="d-flex pt-5">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/icons/Dynamic data updates.png"
                                alt="Research Planning Icon"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Dynamic Data Updates</h6>
                            <p>
                              Keep your LLMs precise and <br /> up-to-date with
                              continuous data refinement
                            </p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                            <div className="icon">
                              <img
                                src="/assets/icons/Enhanced knowledge.png"
                                alt="Investment Icon"
                              />
                            </div>
                          </div>
                          <div className="ps-5">
                            <h6>Enhanced Knowledge Retrieval</h6>
                            <p>
                              Enable your LLMs to access relevant, <br />{" "}
                              real-time information seamlessly.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-6"></div>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/blog-2/img-bg-line.png" alt="infinia" />
        </div>
        <div className="bouncing-blobs-container">
          <div className="bouncing-blobs-glass" />
          <div className="bouncing-blobs">
            <div className="bouncing-blob bouncing-blob--green" />
            <div className="bouncing-blob bouncing-blob--primary" />
          </div>
        </div>
      </section>
    </>
  );
}
