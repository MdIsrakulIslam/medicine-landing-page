import { baseApi } from './baseApi';
import { Feature } from './types/feature';
import { Testimonial } from './types/testimonial';

export const landingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFeatures: build.query<Feature[], void>({
      query: () => 'features',
      providesTags: ['Features'],
    }),
    getTestimonials: build.query<Testimonial[], void>({
      query: () => 'testimonials',
      providesTags: ['Testimonials'],
    }),
    getFAQs: build.query<{ question: string; answer: string }[], void>({
      query: () => 'faqs',
      providesTags: ['FAQs'],
    }),
    subscribeNewsletter: build.mutation<
      { success: boolean; message: string },
      { email: string }
    >({
      query: (body) => ({
        url: 'newsletter/subscribe',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetFeaturesQuery,
  useGetTestimonialsQuery,
  useGetFAQsQuery,
  useSubscribeNewsletterMutation,
} = landingApi;