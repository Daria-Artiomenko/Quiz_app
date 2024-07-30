import { configureStore } from "@reduxjs/toolkit";
import quizConfigReducer from "../features/quizConfigSlice";
import { quizApi } from "../services/getQuestions";

export const store = configureStore({
    reducer: {
        quizConfig: quizConfigReducer,
        [quizApi.reducerPath]: quizApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(quizApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
