import { authApi } from "../../api/authApi";
import { Auth } from "../../types/Auth";
import { LoginPayload } from "./types";

// src/features/auth/authService.ts
export const login = async (
  payload: LoginPayload
): Promise<Auth | undefined> => {
  const response = await authApi.login(payload.username, payload.password);
  return response.data;
};
