import { createSlice } from "@reduxjs/toolkit";

export interface QuizConfigState {
    numberOfQuestions: string | null;
    category: string | null;
    categoryText: string | null;
    difficulty: "easy" | "medium" | "hard" | null;
    type: "boolean" | "multiple" | null;
    time: string | null;
}

const initialState: QuizConfigState = {
    numberOfQuestions: "5",
    category: null,
    categoryText: null,
    difficulty: null,
    type: null,
    time: null,
};

export const quizConfigSlice = createSlice({
    name: "quizConfig",
    initialState,
    reducers: {
        setNumberOfQuestions: (state, action) => {
            state.numberOfQuestions = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setCategoryText: (state, action) => {
            state.categoryText = action.payload;
        },
        setDifficulty: (state, action) => {
            state.difficulty = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
        setTime: (state, action) => {
            state.time = action.payload;
        },
        resetConfigQuiz: (state) => {
            state.numberOfQuestions = "5";
            state.category = null;
            state.difficulty = null;
            state.type = null;
            state.time = null;
        },
    },
});

export const {
    setNumberOfQuestions,
    setCategory,
    setDifficulty,
    setType,
    setTime,
    resetConfigQuiz,
    setCategoryText,
} = quizConfigSlice.actions;

export default quizConfigSlice.reducer;
