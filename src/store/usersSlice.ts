import type { UserType } from '@/types/Users.d';

import { api } from './api';

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[], void>({
      query: () => '/users',
      providesTags: ['users'],
    }),
    getUser: builder.query<UserType, number>({
      query: (id) => `/users/${id}`,
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetUserQuery,
  useGetUsersQuery,
} = usersApi;
