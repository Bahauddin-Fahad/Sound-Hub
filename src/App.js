import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Login from "./components/CustomerLogin/Login/Login";
import Register from "./components/CustomerLogin/Register/Register";
import NotFound from "./components/Shared/NotFound/NotFound";
import Footer from "./components/Shared/Footer/Footer";
import AddItems from "./components/AddItems/AddItems";
import MyItems from "./components/MyItems/MyItems";
import UpdateItem from "./components/UpdateItem/UpdateItem";
import RequireAuth from "./components/CustomerLogin/RequireAuth/RequireAuth";
import ManageInventories from "./components/ManageInventories/ManageInventories";
import { ToastContainer } from "react-toastify";

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
          path="/inventory/:inventoryId"
          element={
            <RequireAuth>
              <UpdateItem />
            </RequireAuth>
          }
        />
        <Route
          path="/manageInventory"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        />
        <Route
          path="/addItems"
          element={
            <RequireAuth>
              <AddItems />
            </RequireAuth>
          }
        />
        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
