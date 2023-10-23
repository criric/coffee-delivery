import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { ConfirmedOrder } from "./pages/ConfirmedOrder";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/confirmed-order" element={<ConfirmedOrder />} />
    </Routes>
  )
}