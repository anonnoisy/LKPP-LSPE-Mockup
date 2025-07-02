import type { Category, Marketplace, User } from "@/data";
import axios, { type AxiosResponse } from "axios";

export type AuthPayload = {
  payload: User;
  token: string;
};

export type AuthResponse = {
  code: string;
  data: {
    token: string;
  } | null;
  message: string;
  status: boolean;
};

export const postAuth = async (
  marketplace: Marketplace,
  category: Category,
  payload: AuthPayload
) => {
  try {
    console.info("Authenticating to merchant...");

    const { data } = await axios.post<AuthResponse, AxiosResponse<AuthResponse>, AuthPayload>(
      marketplace.meta.auth,
      payload,
      {
        headers: {
          "X-Client-ID": marketplace.meta.clientId,
          "X-Client-Secret": marketplace.meta.clientSecret,
          "X-Vertical-Type": category.slug,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
