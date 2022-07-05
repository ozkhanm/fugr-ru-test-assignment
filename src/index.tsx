import ReactDOM from "react-dom/client";
import { Normalize } from "styled-normalize";
import { Provider } from "react-redux";

import App from "./App";

import { setupStore } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = setupStore();

root.render(
  <>
    <Normalize />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);