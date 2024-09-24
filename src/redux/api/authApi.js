import { api } from "./index";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body
      }),
    }),
    logIn: build.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body
      })
    })
  }),
});

export const { useSignUpMutation, useLogInMutation} = authApi;