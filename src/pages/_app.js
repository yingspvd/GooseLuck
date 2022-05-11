import { Provider as ReduxProvider } from "react-redux";
import { DAppProvider } from "@contexts/DAppContext";
import store from "../store";
import "@styles/globals.css";
// import Navbar from "../components/Navbar";

function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      {/* <Navbar /> */}
      <DAppProvider>
        <Component {...pageProps} />
      </DAppProvider>
    </ReduxProvider>
  );
}

export default App;
