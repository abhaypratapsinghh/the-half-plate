import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import { ContactProvider } from "./context/ContactContext";
import { store } from "./store";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ContactProvider>
          <App />
        </ContactProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
