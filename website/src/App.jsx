import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./components/Languagecontext";
import { Toaster } from "sonner";
import LandingPage from "./pages/landing";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="gravita-font">
          <style jsx>{`
            @font-face {
              font-family: "Gravesend Sans";
              src: url("./fonts/fonnts.com-Gravesend_Sans_Light.otf")
                format("opentype");
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Gravesend Sans";
              src: url("./fonts/fonnts.com-Gravesend_Sans_Medium.otf")
                format("opentype");
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Gravesend Sans";
              src: url("./fonts/fonnts.com-Gravesend_Sans_Bold.otf")
                format("opentype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            /* Century Gothic Font Face */
            @font-face {
              font-family: "Century Gothic Custom";
              src: url("./fonts/weezerfont.ttf") format("truetype");
              font-weight: normal;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Gellix";
              src: url("./fonts/Gellix-Light.ttf") format("truetype");
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "Gellix";
              src: url("./fonts/Gellix-Regular.ttf") format("truetype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            /* GravitaHUM Font Face - FIXED PATHS */
            @font-face {
              font-family: "GravitaHUM";
              src: url("/fonts/GravitaHUM-Regular-BF65792883358f8b.otf") format("opentype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "GravitaHUM";
              src: url("/fonts/GravitaHUM-Medium-BF65792882638d1.otf") format("opentype");
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "GravitaHUM";
              src: url("/fonts/GravitaHUM-Bold-BF657928841ed84.otf") format("opentype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: "GravitaHUM";
              src: url("/fonts/GravitaHUM-Black-BF65792882c3895.otf") format("opentype");
              font-weight: 900;
              font-style: normal;
              font-display: swap;
            }

            /* Font utility classes */
            .gravesend-sans {
              font-family: "Gravesend Sans", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            .roboto-font {
              font-family: "Roboto", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            .century-gothic {
              font-family: "Century Gothic Custom", "Century Gothic", "Arial",
                sans-serif;
            }

            .gellix-font {
              font-family: "Gellix", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            .gravita-font {
              font-family: "GravitaHUM", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            /* Force GravitaHUM on all text elements */
            .gravita-font * {
              font-family: "GravitaHUM", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            body {
              overflow-x: hidden;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }

            /* Ensure numbers use GravitaHUM */
            .gravita-font span,
            .gravita-font h1,
            .gravita-font h2,
            .gravita-font h3,
            .gravita-font h4,
            .gravita-font h5,
            .gravita-font h6,
            .gravita-font p,
            .gravita-font button,
            .gravita-font div {
              font-family: "GravitaHUM", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }
          `}</style>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
          <Toaster position="top-right" richColors />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;