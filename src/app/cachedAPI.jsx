import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const baseURL = `${import.meta.env.VITE_REACT_BASE_API_URL}`;

const axiosBaseQuery =
  () =>
  async ({ baseUrl, url, method, data, headers }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, headers });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return { error: { status: err.response?.status, data: err.response?.data } };
    }
  };

export const cachedAPI = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    // GET LIST OF CATEGORIES
    getCategories: builder.query({
      query: (options) => {
        const queryParams = {};
        if (options?.lang !== undefined) {
          queryParams.lang = options.lang;
        }

        const queryString = new URLSearchParams(queryParams).toString();
        const url = `/companies/categories/${queryString ? `?${queryString}` : ''}`;

        return {
          baseUrl: baseURL,
          url,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = cachedAPI;
