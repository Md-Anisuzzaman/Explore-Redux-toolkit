import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/BackEnd/Dashboard";
import ProductLayout from "./Pages/BackEnd/Management/Product/ProductLayout";
import { ProductAll, ProductCreate, ProductDetails, ProductUpdate } from "./Pages/BackEnd/Management/Product/ProductPageList";
import UserLayout from "./Pages/BackEnd/Management/User/UserLayout";
import { UserAll, UserCreate, UserDetails, UserUpdate } from "./Pages/BackEnd/Management/User/UserPageLists";
import BackEndLayout from "./Pages/Layouts/BackEndLayout";
import FrontEndLayout from "./Pages/Layouts/FrontEndLayout";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="" element={<FrontEndLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/dashboard" element={<BackEndLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="user" element={<UserLayout />}>
            <Route index element={<UserAll />} />
            <Route path="create" element={<UserCreate />} />
            <Route path="edit" element={<UserUpdate/>} />
            <Route path="details" element={<UserDetails />} />
          </Route>

          <Route path="product" element={<ProductLayout/>}>
            <Route index element={<ProductAll />} />
            <Route path="create" element={<ProductCreate />} />
            <Route path="edit/:id" element={<ProductUpdate/>} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
