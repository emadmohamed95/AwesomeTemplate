import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { URL } from "../constants/constants";


export const cartApi = createApi({
    reducerPath: 'cart',
    tagTypes: ['Item'],
    baseQuery: fetchBaseQuery({
            baseUrl: URL+"/v1/cart",
            prepareHeaders: (headers, { getState }) => {
              const token = getState().auth.token; // or data
        
       // If we have a token set in state, let's assume that we should be passing it.
          if (token) {
            headers.set('user-token', token);
          }
              return headers;
            },
          }),
  endpoints(build) {
    return {
      getCart: build.query({
        query: () => ({
          url: '/'
        }),
        providesTags:['Item']
      }),
      addItemToCart: build.mutation({
        query: item => ({
          url: '/item',
          method: 'POST',
          body: item,
        }),
        invalidatesTags: ['Item'],
       
      }),

      addItemsToCart: build.mutation({
        query: items => ({
          url: '/items',
          method: 'POST',
          body: items,
        }),
        invalidatesTags: ['Item'],

      }),
      deleteItemFromCart: build.mutation({
        query: item_id => ({
          url: `/item?item_id=${item_id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Item'],
      }),
    };
  },
});

export const {
 useAddItemToCartMutation, useAddItemsToCartMutation, useDeleteItemFromCartMutation, useGetCartQuery
} = cartApi;
