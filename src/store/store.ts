import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import quizConfigSlice from "../features/quizConfigSlice";
import { quizApi } from "../services/getQuestions";
import quizQuestionSlice from "../features/quizQuestionSlice";
import statsSlice from "../features/statsSlice";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["stats"],
};

const rootReducer = combineReducers({
    quizConfig: quizConfigSlice,
    [quizApi.reducerPath]: quizApi.reducer,
    quizQuestion: quizQuestionSlice,
    stats: statsSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(quizApi.middleware),
});

export let persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
