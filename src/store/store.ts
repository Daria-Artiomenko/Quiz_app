import { combineReducers, configureStore } from "@reduxjs/toolkit";
import quizConfigSlice from "../features/quizConfigSlice";
import { quizApi } from "../services/getQuestions";
import quizQuestionSlice from "../features/quizQuestionSlice";

const rootReducer = combineReducers({
    quizConfig: quizConfigSlice,
    [quizApi.reducerPath]: quizApi.reducer,
    quizQuestion: quizQuestionSlice,
});

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(quizApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore["dispatch"];
