import Header from "./components/Header";
import NavbarMobile from "./components/NavbarMobile";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <NavbarMobile/>
    </>
  );
}

export default App;
