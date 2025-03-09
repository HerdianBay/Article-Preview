import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ArticlePreview from "./ArticlePreview";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ArticlePreview />
  </StrictMode>
);
