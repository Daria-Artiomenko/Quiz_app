import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store.ts";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { LoadingAnimation } from "./components/loadingAnimation/LoadingAnimation";
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={<LoadingAnimation />} persistor={persistor}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
