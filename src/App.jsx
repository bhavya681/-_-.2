import React from "react";
import LightAndDarkModeButton from "./components/LightAndDarkModeButton";

const App = () => {
  return (
    <>
      <div>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#0c0c0c",
            color: "#fff",
            margin: 0,
            padding: 0,
          }}
        >
          <header
            style={{
              backgroundColor: "#1c1c1c",
              color: "#fff",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "24px" }}>
              Tribute to Steve Jobs
            </h1>
          </header>

          <main style={{ padding: "20px" }}>
            <div
              style={{
                boxShadow: "0 0 5px rgba(255, 255, 255, 0.2)",
                backgroundColor: "#1c1c1c",
                borderRadius: "6px",
                position: "relative",
                padding: "15px",
                transition: "all 0.3s ease",
                margin: "0 auto",
                maxWidth: "700px",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Steve Jobs"
                  style={{
                    borderRadius: "6px",
                    maxWidth: "100%",
                    height: "auto",
                    filter: "grayscale(100%)",
                    transition: "all 0.3s ease",
                    width: "50rem",
                  }}
                />
              </div>
              <p style={{ textAlign: "justify", position: "relative" }}>
                Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an
                American business magnate, industrial designer, and co-founder
                of Apple Inc. He played a vital role in revolutionizing the
                technology industry by introducing innovative products like the
                iPhone, iPad, and MacBook.
                <span
                  style={{
                    position: "absolute",
                    bottom: "140%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "15px",
                    borderRadius: "10px",
                    fontStyle: "italic",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
                    textAlign: "center",
                    maxWidth: "90%",
                  }}
                >
                  "Your work is going to fill a large part of your life, and the
                  only way to be truly satisfied is to do what you believe is
                  great work. And the only way to do great work is to love what
                  you do." - Steve Jobs
                </span>
              </p>

              <p style={{ textAlign: "justify" }}>
                Steve Jobs' vision, passion, and attention to detail continue to
                inspire generations of entrepreneurs and innovators around the
                world.
              </p>
            </div>
          </main>

          <footer
            style={{
              textAlign: "center",
              padding: "20px",
              backgroundColor: "#1c1c1c",
              color: "#fff",
            }}
          >
            <p style={{ margin: 20 }}>Designed by Bhavya Wade</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;
