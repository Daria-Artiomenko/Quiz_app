import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuestion } from "./IQuestion";

export const quizApi = createApi({
    reducerPath: "quizApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://opentdb.com" }),
    endpoints: (builder) => ({
        getQuestions: builder.query<
            IQuestion[],
            {
                numberOfQuestions: number | null;
                category: string | null;
                difficulty: string | null;
                type: string | null;
            }
        >({
            query: ({ numberOfQuestions, category, difficulty, type }) => ({
                url: "/api.php?",
                params: {
                    amount: numberOfQuestions,
                    category: category,
                    difficulty: difficulty,
                    type: type,
                },
            }),
            transformResponse: (response: { results: IQuestion[] }) =>
                response.results,
        }),
    }),
});
export const { useGetQuestionsQuery } = quizApi;
