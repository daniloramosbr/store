import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import Cart from "./pages/cart/cart";
import FilterPrice from "./pages/price/filterprice";
import Search from "./pages/search/search";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/store" element={<Home />} />
        <Route path="/produto" element={<Product />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/price" element={<FilterPrice />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
