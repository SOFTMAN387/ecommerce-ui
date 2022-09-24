import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import  ProductsList  from "./pages/productsLists/ProductsList";
import  ProductsDetails  from "./pages/ProductsDetails/ProductsDetails";
import Cart from "./pages/cartbtn/Cart";
//import { Home } from "./components/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CheckOut from "./pages/checkout/CheckOut";
function App() {
  return (
    <>
     


      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/cart/:id" element={<Cart />} />
        <Route exact path="/checkout/:id" element={<CheckOut />} />
        <Route exact path="/productlist" element={<ProductsList />} />
        <Route exact path="/productsdetails/:id" element={<ProductsDetails />} />

      </Routes>
    </>
  );
}

export default App;
