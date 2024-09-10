import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("emision-vehiculo")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
