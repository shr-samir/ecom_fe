import { Routes, Route } from "react-router-dom";
import {
  Home,
  Collection,
  About,
  Contact,
  Product,
  Cart,
  Login,
  PlaceOrder,
  Orders,
  Register
} from "./pages";
import { Footer, Navbar, SearchBar } from "./components";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 lg:px-20 w-full overflow-hidden">
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
