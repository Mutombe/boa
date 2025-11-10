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

            /* GravitaHUM Font Face - CORRECTED PATHS */
            @font-face {
              font-family: "GravitaHUM";
              src: url("/fonts/GravitaHUM-Regular-BF6579288358f8b.otf") format("opentype");
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
            .gravita-font {
              font-family: "GravitaHUM", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
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

            body {
              overflow-x: hidden;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
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
