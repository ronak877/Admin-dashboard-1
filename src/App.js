import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-header">
        <Header />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
