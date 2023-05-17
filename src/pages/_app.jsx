import "src/styles/globals.css";

import dynamic from 'next/dynamic'

import ThemeProvider from "src/theme";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const App = ({ Component, pageProps }) =>{
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

export default App;
