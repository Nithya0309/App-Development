import Login from "./Pages/LoginPage";
import Home from "./Pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Routes } from "react-router-dom";
import Dashboard from "./Pages/AdminDashboard";
import Navbar from "./Components/NavBar";
import UserDashboard from "./Pages/UserDashboard";
import Footer from "./Components/Footer";
import MenPage from "./Pages/Men";
import WomenPage from "./Pages/Women";
import KidsPage from "./Pages/Kids";
import SearchPage from "./Pages/searchPage";
import Cart from "./Pages/Cart";
import AccessoriesPage from "./Pages/Access";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<><Navbar/><Footer/></>} >
        <Route index element={<Home />} />
        <Route path="/profile" element={<UserDashboard />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/AdminDashBoard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
