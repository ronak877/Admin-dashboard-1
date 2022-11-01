import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
