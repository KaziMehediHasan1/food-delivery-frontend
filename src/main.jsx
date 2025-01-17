import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import React from "react";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NavbarProvider from "./components/Navbar/NavContext/NavbarProvider.jsx";
const queryClient = new QueryClient();
const clientID = import.meta.env.VITE_GOOGLE_OAUTH_CLIENTID;
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={clientID}>
        <AuthProvider>
          <NavbarProvider>
            <RouterProvider router={router} />
          </NavbarProvider>
          <ToastContainer />
        </AuthProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
