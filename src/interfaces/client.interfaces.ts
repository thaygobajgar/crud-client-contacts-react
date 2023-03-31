import { iContactWithoutClient } from "./contacts.interfaces";

export interface iClient {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  id: string;
  createdAt: string;
  deletedAt: string | null;
  updatedAt: string | null;
  isAdm: boolean;
  isActive: boolean;
}

export interface iClientProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  id: string;
  createdAt: string;
  deletedAt: string | null;
  updatedAt: string | null;
  isAdm: boolean;
  isActive: boolean;
  contacts: iContactWithoutClient[];
}

export interface iClientRegister {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  id: string;
  password: string;
  confirmPassword: string;
}

export interface iClientLogin {
  email: string;
  password: string;
}
