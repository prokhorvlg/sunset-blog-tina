import { ParallaxProvider } from "react-scroll-parallax";
import "../styles.css";
import '../styles.scss';

const App = ({ Component, pageProps }) => {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
};

export default App;
