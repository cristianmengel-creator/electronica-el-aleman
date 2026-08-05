import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

function Root() {

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return <App />;
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);