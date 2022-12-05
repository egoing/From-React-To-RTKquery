import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const topicApi = createApi({
    reducerPath: 'topicApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    tagTypes:['Topics'],
    endpoints: (builder) => ({
      getTopics: builder.query({
        query: () => `topics`,
        providesTags: (result, error, arg) => {
            return ['Topics', ...result.map(topic=>({type:'Topics', id:topic.id}))]
        },
      }),
      getTopic: builder.query({
        query: (id) => `topics/${id}`,
        providesTags: (result, error, arg) => {
            return [{type:`Topics`, id:arg}]
        },
      }),
      createTopic: builder.mutation({
        query: ({title, body})=>({
            url:`topics`,
            method: `POST`,
            body: {title, body}  
        }),
        invalidatesTags: ['Topics'],
      }),
      updateTopic: builder.mutation({
        query: ({id, title, body})=>({
            url:`topics/${id}`,
            method: `PATCH`,
            body: {title, body}  
        }),
        invalidatesTags: (result, error, arg)=>{
            // ['Topics']를 하지 않는 이유는 Topics를 하면 모든 캐쉬가 지워지기 때문입니다.
            return [{type:'Topics', id:arg.id}]; 
        }
      }),
      deleteTopic: builder.mutation({
        query: (id)=>({
            url:`topics/${id}`,
            method: `DELETE`,
        }),
        invalidatesTags: ['Topics']
      }),
    }),
  })
  
  export const { 
    useGetTopicsQuery, 
    useGetTopicQuery, 
    useCreateTopicMutation, 
    useUpdateTopicMutation, 
    useDeleteTopicMutation,
} = topicApi