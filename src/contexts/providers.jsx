import React from "react";
import { AuthProvider } from "./AuthContext";

import { ContactContextProvider } from "./ContactContext";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ContactContextProvider>{children}</ContactContextProvider>
    </AuthProvider>
  );
};

export default Providers;
