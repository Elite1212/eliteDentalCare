import { Outlet } from "react-router-dom";
import Footer from "./Footer";
// import Footer from "../components/Footer";
// import Nav from "../components/Nav";

export default function Layout() {
  return (
    <main className="bg-bg ">
      {/* <Nav /> */}
      <Outlet />
      <Footer />
    </main>
  );
}
