import { Provider as ReduxProvider } from "react-redux";
import { DAppProvider } from "@contexts/DAppContext";
import store from "../store";

import "@styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <DAppProvider>
        <Component {...pageProps} />
      </DAppProvider>
    </ReduxProvider>
  );
}

export default App;
