import { UsersParamsType } from './../../../models/paramsRtk/usersParams';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UsersType } from './../../../models/mainfetchtypes';

export const mainRtk = createApi({
  reducerPath: "mainRtk",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://frontend-test-assignment-api.abz.agency/api/",
  }),
  endpoints: (build) => ({
    getUsers: build.query<UsersType, UsersParamsType>({
      query: ({page, count}) => ({
        url: `v1/users`,
        params: {
          page: page,
          count: count,
        }
      }),
    }),
  }),
});


export const { useLazyGetUsersQuery } = mainRtk;