import Navbar from "./components/Navbar";
import Search from "./components/Search";
import LogoSection from "./components/LogoSection";

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <LogoSection />
      <div className="u-fixed-width">
        <hr />
      </div>
    </div>
  );
}

export default App;
