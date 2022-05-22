import "./App.css";
import BottomNav from "./Components/BottomNav";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SecondNavbar from "./Components/SecondNavbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecondNavbar />
      <Home />
      <Cards />
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
