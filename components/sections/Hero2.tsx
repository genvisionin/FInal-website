"use client"; // Mark this as a Client Component

import Link from "next/link";

export default function Hero2() {
  return (
    <>
      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          height: "100vh", // Full height of the viewport
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          position: "relative", // For overlay
        }}
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="position-absolute w-100 h-100 object-fit-cover"
          style={{
            top: 0,
            left: 0,
            zIndex: -2, // Ensure the video stays behind everything
          }}
        >
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Semi-transparent Overlay */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
            zIndex: -1, // Behind the text but in front of the video
          }}
        ></div>

        {/* Stars Overlay */}
        <div
          className="position-absolute"
          style={{
            zIndex: 1, // Stars above gradients
            top: "20%", // Adjusted closer to center
            left: "15%", // Adjusted closer to center
          }}
        >
          <img
            className="flickering rotateme"
            src="/assets/imgs/hero-2/star-1.png"
            alt="kerrsor"
          />
        </div>
        <div
          className="position-absolute"
          style={{
            zIndex: 1, // Stars above gradients
            top: "15%",
            right: "15%", // Adjusted closer to center
          }}
        >
          <img
            className="flickering rotateme"
            src="/assets/imgs/hero-2/star-3.png"
            alt="kerrsor"
          />
        </div>
        <div
          className="position-absolute"
          style={{
            zIndex: 1, // Stars above gradients
            bottom: "20%", // Adjusted closer to center
            left: "25%", // Adjusted closer to center
          }}
        >
          <img
            className="flickering rotateme"
            src="/assets/imgs/hero-2/star-2.png"
            alt="kerrsor"
          />
        </div>

        {/* Content Section */}
        <div
          className="container"
          style={{
            color: "white", // Set text color to white
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%", // Ensure it spans the full viewport height
          }}
        >
          <div className="row text-center">
            <div className="col">
              <h3
                className="ds-3 fw-normal mb-4"
                style={{
                  color: "white", // Set text color to white
                }}
              >
                <span
                  className="fw-bold"
                  style={{
                    color: "white", // Light purple color
                  }}
                >
                  Your AI Team
                </span>
                , Ready to <br />
                <span
                  data-aos="fade-zoom-in"
                  data-aos-delay={20}
                  style={{
                    fontWeight: "normal", // Remove bold
                    color: "white", // Set text color to white
                  }}
                >
                  Transform
                </span>{" "}
                Your Business
              </h3>
              <p
                style={{
                  fontSize: "1.1rem", // Increased font size
                  color: "rgba(255, 255, 255, 0.9)", // Slightly lighter white for contrast
                  marginBottom: "1.5rem", // Space between the text and buttons
                  fontFamily: "'Poppins', sans-serif", // Same font as "Talk to AI expert"
                  fontWeight: 400, // Normal font weight
                }}
              >
                <span style={{ fontWeight: 600, color: "white" }}>
                  Hire Expert Data scientists for a fixed monthly fee
                </span>{" "}
                to enhance efficiency,
                <br />
                unlock new revenue streams, and future-proof your operations.
              </p>
              <div className="d-flex gap-3 flex-column flex-md-row justify-content-center">
                <Link
                  href="/page-contact-2"
                  className="btn btn-gradient"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  Talk to an AI expert
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      className="stroke-white"
                      d="M17.25 15.25V6.75H8.75"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="stroke-white"
                      d="M17 7L6.75 17.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/#pricing"
                  className="btn btn-outline-secondary hover-up"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  Go to Pricing Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles for Animations */}
      <style jsx>{`
        .flickering {
          animation: flicker 3s infinite ease-in-out;
        }

        .rotateme {
          animation: rotate 10s infinite linear;
        }

        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}