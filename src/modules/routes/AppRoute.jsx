import React, { useEffect, useState } from "react";
import { Navbar } from "../navigation/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { Index } from "../home/Index";
import { CartIndex } from "../cart/CartIndex";

const AuthenticatedLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export const AppRoute = () => {
  const authRoutes = [
    { path: "/", component: <Index /> },
    { path: "/cart", component: <CartIndex /> },
  ];

  return (
    <div>
      <Routes>
        {authRoutes.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={<AuthenticatedLayout>{component}</AuthenticatedLayout>}
          />
        ))}

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};
