import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="bg-primary-bg-color">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
