import "src/styles/globals.css";

import ThemeProvider from "src/theme";

export default function App({ Component, pageProps }) {
  const Layout = Component.layout || (({children}) => <>{children}</>)
  return (
    <ThemeProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
