import { UsersParamsType } from "./../../../models/paramsRtk/usersParams";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UsersType } from "./../../../models/mainfetchtypes";

export const mainRtk = createApi({
  reducerPath: "mainRtk",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://frontend-test-assignment-api.abz.agency/api/",
  }),
  endpoints: (build) => ({
    getUsers: build.query<UsersType, UsersParamsType>({
      query: ({ page, count }) => ({
        url: `v1/users`,
        params: {
          page: page,
          count: count,
        },
      }),
    }),
    postForm: build.mutation<any, any>({
      query: ({ name, email, phone, position_id, photo }) => ({
        url: `v1/users`,
        method: "POST",
        params: {
          name,
          email,
          phone,
          position_id,
          photo
        },
        headers: {
          token:
          "eyJpdiI6Ikw4V3lDeVk2NXFhYzVXeUpcL1I5Qk13PT0iLCJ2YWx1ZSI6ImRsc1ljUlFkUUNDN2pwSWkrcHVIVHpxenBMMGM3MHJ3MVh2dGhJRm1lXC9DVHNEdVJnZWpWczFsV0pNUzMyc0hrTkRVQVFQWm1sb3ZPSm5ydjZYU0o2QT09IiwibWFjIjoiN2MzZDVkMWIyMjllZGI2ZTVlYmY0ZmM1NzIwZmU1ZGE1MWU4NTkwOTk3MWQ3NDZjNzMzNWFhYjVmYmY4MjAxMiJ9",
          "Content-Type": "multipart/form-data"
        },
      }),
    }),
  }),
});

export const { useLazyGetUsersQuery, usePostFormMutation } = mainRtk;
