import { createSlice } from "@reduxjs/toolkit";

export interface QuizConfigState {
    numberOfQuestions: number;
    category: string | null;
    difficulty: "easy" | "medium" | "hard" | null;
    type: "boolean" | "multiple" | null;
    time: string | null;
}

const initialState: QuizConfigState = {
    numberOfQuestions: 5,
    category: null,
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
            state.numberOfQuestions = 5;
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
} = quizConfigSlice.actions;

export default quizConfigSlice.reducer;
