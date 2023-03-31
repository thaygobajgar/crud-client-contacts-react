import { iClient } from "./client.interfaces";

export interface iContact {
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string;
  id: string;
  createdAt: string;
  deletedAt: string | null;
  updatedAt: string | null;
  client: iClient;
}

export interface iContactWithoutClient {
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string;
  id: string;
  createdAt: string;
  deletedAt: string | null;
  updatedAt: string | null;
}

export interface IContactRegister {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
