import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/navigation";
import { DevicesProvider } from "./context/devices";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <DevicesProvider>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </DevicesProvider>
);
