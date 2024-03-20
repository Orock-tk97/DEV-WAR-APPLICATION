import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Home } from "../pages";


export const AllRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element = {<Home/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

{
  /* <BrowserRouter>
<Routes>
  <Route path="/" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dash" element={<Layout />}>
    <Route path="/dash/admin" element={<DashboardAdmin />} />
    <Route path="/dash/adminUser" element={<DashboardAdminUser />} />
    <Route path="/dash/user" element={<DashboardUser />} />
  </Route>
</Routes>
</BrowserRouter> */
}
