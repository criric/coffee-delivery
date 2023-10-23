import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { ConfirmedOrder } from "./pages/ConfirmedOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmed-order" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  )
}