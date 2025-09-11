import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a base query with the base URL
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api/',
  prepareHeaders: (headers) => {
    // You can add auth headers here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   headers.set('authorization', `Bearer ${token}`);
    // }
    return headers;
  },
});

// Create the base API
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Features', 'Testimonials', 'FAQs'],
  endpoints: () => ({}),
});