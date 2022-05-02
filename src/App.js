import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Login from "./components/CustomerLogin/Login/Login";
import Register from "./components/CustomerLogin/Register/Register";
import NotFound from "./components/Shared/NotFound/NotFound";
import Footer from "./components/Shared/Footer/Footer";
import { useEffect } from "react";
import ManageItems from "./components/ManageItems/ManageItems";
import AddItems from "./components/AddItems/AddItems";
import MyItems from "./components/MyItems/MyItems";
import UpdateItem from "./components/UpdateItem/UpdateItem";
import RequireAuth from "./components/CustomerLogin/RequireAuth/RequireAuth";
import ManageInventories from "./components/ManageInventories/ManageInventories";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <UpdateItem />
            </RequireAuth>
          }
        />
        <Route path="/manageInventory" element={<ManageInventories />} />
        <Route path="/manageItems" element={<ManageItems />} />
        <Route path="/addItems" element={<AddItems />} />
        <Route path="/myItems" element={<MyItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
