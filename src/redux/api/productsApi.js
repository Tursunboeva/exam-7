import { api } from '.';

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: "/users?page=2"
      }),
      providesTags: ["USERS"]
    }),
    getUserById: build.query({ 
      query: (id) => ({
        url: `/users/${id}`
      }),
      providesTags: ["USERS"]
    }),
    createUsers: build.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body
      }),
      invalidatesTags: ["USERS"]
    }),
    deleteUser: build.mutation({  // Yangi deleteUser mutationini qo'shamiz
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["USERS"],
    }),
  }),
  overrideExisting: false, 
});

export const { 
  useGetUserQuery, 
  useGetUserByIdQuery, 
  useCreateUsersMutation, 
  useDeleteUserMutation // Yangi deleteUser mutationini ham eksport qilamiz
} = productsApi;

export default productsApi;
