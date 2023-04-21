import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7001/api",
    // prepareHeaders: (headers, { getState }) => {
    //   // By default, if we have a token in the store, let's use that for authenticated requests
    //   const token = (getState() as RootState).auth.token
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`)
    //   }
    //   return headers
    // },
  }),
  tagTypes: ["Blog", "Appointment", "Enquiry", "User", "category", "ContactUs"],
  endpoints: (build) => ({
    adminLogin: build.mutation({
      query(body) {
        return {
          url: "adminLogin",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),

    addBlog: build.mutation({
      query({ value, token }) {
        return {
          url: "addBlog",
          method: "POST",
          body: value,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["Blog"],
    }),
    changePassword: build.mutation({
      query({ values, token }) {
        return {
          url: "changePassword",
          method: "PATCH",
          body: values,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["User"],
    }),

    addAppointment: build.mutation({
      query(value) {
        return {
          url: "addAppointment",
          method: "Post",
          body: value,
          //   headers: {
          //     authorization: `Bearer ${token}`,
          //   },
        };
      },
      invalidatesTags: ["Appointment"],
    }),

    adminProfile: build.query({
      query(token) {
        return {
          url: "adminProfile",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["User"],
    }),

    getAllContactUs: build.query({
      query(token) {
        return {
          url: "getAllContactUs",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["ContactUs"],
    }),
    getAllEnquiry: build.query({
      query(token) {
        return {
          url: "getAllEnquiry",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["Enquiry"],
    }),
    getAllAppointment: build.query({
      query(token) {
        return {
          url: "getAllAppointment",
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["Appointment"],
    }),

    getCategory: build.query({
      query() {
        return {
          url: "getCategory",
          method: "GET",
          //   headers: {
          //     authorization: `Bearer ${token}`,
          //   },
        };
      },

      providesTags: ["category"],
    }),

    getAllBlog: build.query({
      query() {
        return {
          url: "getAllBlog",
          method: "GET",
          //   headers: {
          //     authorization: `Bearer ${token}`,
          //   },
        };
      },
      providesTags: ["Blog"],
    }),
    getPopulerBlog: build.query({
      query() {
        return {
          url: "getPopulerBlog",
          method: "GET",
          //   headers: {
          //     authorization: `Bearer ${token}`,
          //   },
        };
      },
      providesTags: ["Blog"],
    }),
    getRecentBlog: build.query({
      query() {
        return {
          url: "getRecentBlog",
          method: "GET",
          //   headers: {
          //     authorization: `Bearer ${token}`,
          //   },
        };
      },
      providesTags: ["Blog"],
    }),

    addEnquiry: build.mutation({
      query(values) {
        return {
          url: "addEnquiry",
          method: "POST",
          body: values,
        };
      },
      invalidatesTags: ["User"],
    }),
    addContactUs: build.mutation({
      query(values) {
        return {
          url: "addContactUs",
          method: "POST",
          body: values,
        };
      },
      invalidatesTags: ["ContactUs"],
    }),
    addCategory: build.mutation({
      query({ data, token }) {
        return {
          url: "addCategory",
          method: "POST",
          body: data,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["category"],
    }),

    getBlogById: build.query({
      query(_id) {
        return {
          url: `getBlogById/${_id}`,
          method: "GET",
        };
      },
      providesTags: ["Blog"],
    }),
    getBlogByCat: build.query({
      query(category) {
        return {
          url: `getBlogByCat/${category}`,
          method: "GET",
        };
      },
      providesTags: ["Blog"],
    }),

    getAppointmentById: build.query({
      query({ token, _id }) {
        return {
          url: `getAppointmentById/${_id}`,
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ["Appointment"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAddAppointmentMutation,
  useAddBlogMutation,
  useAddEnquiryMutation,
  useGetAllAppointmentQuery,
  useAdminProfileQuery,
  useGetAllEnquiryQuery,
  useGetAppointmentByIdQuery,
  useGetBlogByIdQuery,
  useAdminLoginMutation,
  useAddCategoryMutation,
  useAddContactUsMutation,
  useGetCategoryQuery,
  useGetAllBlogQuery,
  useGetRecentBlogQuery,
  useGetPopulerBlogQuery,
  useGetBlogByCatQuery,
  useGetAllContactUsQuery,
  useChangePasswordMutation,
} = profileApi;
