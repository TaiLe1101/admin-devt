/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ApiErrorException } from "../../exceptions/ApiErrorException";
import { ApiResponse } from "../../types/ApiResponse";
import { login } from "./authService";
import { AuthState, LoginPayload } from "./types";

// Khởi tạo state ban đầu
const initialState: AuthState = {
  token: "",
};

// Thunk để xử lý logic bất đồng bộ (call API)
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await login(payload);
      return response!.accessToken;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Tạo slice cho Auth
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, () => {});
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.token = action.payload;
      }
    );
    builder.addCase(loginUser.rejected, (_, action) => {
      throw new ApiErrorException<ApiResponse<undefined>>(
        "Axios Error",
        action.payload as ApiResponse<undefined>
      );
    });
  },
});

// Export actions
export const { logout } = authSlice.actions;

// Selector
export const selectToken = (state: RootState) => state.auth.token;

// Export reducer
export default authSlice.reducer;
