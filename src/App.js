import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Orders from "./Components/Orders/Orders";
import RequiredAuth from "./Components/RequiredAuth/RequiredAuth";
import Shipping from "./Components/Shipping/Shipping";
import Shop from "./Components/Shop/Shop";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/inventory"
          element={
            <RequiredAuth>
              <Inventory />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/shipping"
          element={
            <RequiredAuth>
              <Shipping />
            </RequiredAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
