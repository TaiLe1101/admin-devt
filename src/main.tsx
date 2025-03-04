import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { store } from "./app/store.ts";
import "./index.css";
import { MessageProvider } from "./providers/MessageProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MessageProvider>
        <App />
      </MessageProvider>
    </Provider>
  </StrictMode>
);
