import React from "react";
import { AuthProvider } from "./AuthContext";

import { ContactContextProvider } from "./ContactContext";

export interface iProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: iProvidersProps) => {
  return (
    <AuthProvider>
      <ContactContextProvider>{children}</ContactContextProvider>
    </AuthProvider>
  );
};

export default Providers;
