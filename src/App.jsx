import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AppRoutes from "./Components/utils/Routes";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <AppRoutes/>
          <Footer/>
      </div>
  );
}

export default App;
