import "src/styles/globals.css";

import ThemeProvider from "src/theme";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

export default function App({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Layout>
          <Component {...pageProps} />
        </Layout>{" "}
      </LocalizationProvider>
    </ThemeProvider>
  );
}
