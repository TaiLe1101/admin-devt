import { ApiResponse } from "../types/ApiResponse";
import { Auth } from "../types/Auth";
import axiosInstance from "../configs/Axios";

export const authApi = {
  async login(username: string, password: string) {
    const data = await axiosInstance.post<ApiResponse<Auth>>("/auth/login", {
      username,
      password,
    });
    return data.data;
  },
};
