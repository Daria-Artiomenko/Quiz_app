import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IStats {
    totalQuestionsAmount: number;
    totalCorrectAnswers: number;
    totalQuestionsByCategory: {
        [key: string]: number;
    };
    correctAnswersByCategory: {
        [key: string]: number;
    };
    totalQuestionsByDifficulty: {
        [key: string]: number;
    };
    correctAnswersByDifficulty: {
        [key: string]: number;
    };
    totalQuestionsByType: {
        [key: string]: number;
    };
    correctAnswersByType: {
        [key: string]: number;
    };
}

const initialState: IStats = {
    totalQuestionsAmount: 0,
    totalCorrectAnswers: 0,
    totalQuestionsByCategory: {},
    correctAnswersByCategory: {},
    totalQuestionsByDifficulty: {},
    correctAnswersByDifficulty: {},
    totalQuestionsByType: {},
    correctAnswersByType: {},
};
export const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        setTotalQuestionsAmount: (state, action) => {
            state.totalQuestionsAmount += action.payload;
        },
        setTotalCorrectAnswers: (state, action) => {
            state.totalCorrectAnswers += action.payload;
        },
        setStatsByCategory: (
            state,
            action: PayloadAction<{
                category: string;
                amount: number;
                correctAnswers: number;
            }>
        ) => {
            const { category, amount, correctAnswers } = action.payload;
            if (state.totalQuestionsByCategory.hasOwnProperty(category)) {
                state.totalQuestionsByCategory[category] += amount;
                state.correctAnswersByCategory[category] += correctAnswers;
            } else {
                state.totalQuestionsByCategory[category] = amount;
                state.correctAnswersByCategory[category] = correctAnswers;
            }
        },
        setStatsByDifficulty: (
            state,
            action: PayloadAction<{
                difficulty: string;
                amount: number;
                correctAnswers: number;
            }>
        ) => {
            const { difficulty, amount, correctAnswers } = action.payload;
            if (state.totalQuestionsByDifficulty.hasOwnProperty(difficulty)) {
                state.totalQuestionsByDifficulty[difficulty] += amount;
                state.correctAnswersByDifficulty[difficulty] += correctAnswers;
            } else {
                state.totalQuestionsByDifficulty[difficulty] = amount;
                state.correctAnswersByDifficulty[difficulty] = correctAnswers;
            }
        },
        setStatsByType: (
            state,
            action: PayloadAction<{
                type: string;
                amount: number;
                correctAnswers: number;
            }>
        ) => {
            const { type, amount, correctAnswers } = action.payload;
            if (state.totalQuestionsByType.hasOwnProperty(type)) {
                state.totalQuestionsByType[type] += amount;
                state.correctAnswersByType[type] += correctAnswers;
            } else {
                state.totalQuestionsByType[type] = amount;
                state.correctAnswersByType[type] = correctAnswers;
            }
        },
    },
});
export const {
    setTotalQuestionsAmount,
    setTotalCorrectAnswers,
    setStatsByCategory,
    setStatsByDifficulty,
    setStatsByType,
} = statsSlice.actions;
export default statsSlice.reducer;
