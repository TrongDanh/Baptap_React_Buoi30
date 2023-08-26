import BannerComponents from "./components/BannerComponents";
import BodyComponents from "./components/BodyComponents";
import FooterComponents from "./components/FooterComponents";
import HeaderComponents from "./components/HeaderComponents";
import ItemComponents from "./components/ItemComponents";


function App() {
  return (
    <div className="App">
      <HeaderComponents />
      <div class="container">
        <BodyComponents />
        <BannerComponents/>
      </div>
      <div class="container">
        <ItemComponents />
      </div>
      <FooterComponents />
    </div>
  );
}

export default App;
