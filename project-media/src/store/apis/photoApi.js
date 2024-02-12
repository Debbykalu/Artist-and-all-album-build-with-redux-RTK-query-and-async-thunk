import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { faker } from "@faker-js/faker";

const photoApi = createApi({
    reducerPath: '/photos',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3500",
    }),
    endpoints(builder){
        return {
            fetchPhotos: builder.query({
                providesTags: (result, error, album) => {
                    const tags = result.map((photo) => {
                      return { type: 'photo', id: photo.id };
                    });
                    tags.push({ type: 'AlbumsPhoto', id: album.id });
                    return tags;
                  },
                query: (album) => {
                    return {
                      url: '/photos',
                      params: {
                        albumId: album.id,
                      },
                      method: 'GET',
                    };
                  },
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: 'AlbumsPhoto', id: album.id }]
                },
                query: (album) => {
                    return {
                      url: '/photos',
                      method: 'POST',
                      body: {
                        albumId: album.id,
                        url: faker.image.abstract(150, 150, true)
                      },
                    };
                  },
            }),
            removePhoto: builder.mutation({
                invalidatesTags: (result, error, photo) => {
                    return [{ type: 'photo', id: photo.id }]
                },
                query: (photo) => {
                    return {
                      url: `/photos/${photo.id}`,
                      method: 'DELETE',
                    };
                  },
            }),
        }
    }
});

export const { 
    useFetchPhotosQuery, 
    useAddPhotoMutation,
    useRemovePhotoMutation,
} = photoApi;
export { photoApi };