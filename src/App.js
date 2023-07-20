import { GlobalStyle } from "./GlobalStyles";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Recommendation } from "./components/Recommendation/Recommendation";
import { ReadyToSell } from "./components/ReadyToSell/ReadyToSell";
import { Review } from "./components/AboutUs/Review";
import { Partnership } from "./components/Partnership/Partnership";
import { MoreInfo } from "./components/MoreInfo/MoreInfo";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Recommendation />
      <ReadyToSell />
      <Review />
      <Partnership />
      <MoreInfo />
      <Footer />
    </>
  );
}

export default App;
