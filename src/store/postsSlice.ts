import type { PostType } from '@/types/Posts.d';

import { api } from './api';

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[], void>({
      query: () => '/posts',
      providesTags: ['posts'],
    }),
    getPost: builder.query<PostType, number>({
      query: (id) => `/posts/${id}`,
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetPostQuery,
  useGetPostsQuery,
} = postsApi;
