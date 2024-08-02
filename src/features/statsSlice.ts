import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IStats {
    totalQuestionsAmount: number;
    totalCorrectAnswers: number;
    totalQuestionsByCategory: { [key: string]: number };
    correctAnswersByCategory: { [key: string]: number };
    totalQuestionsByDifficulty: { [key: string]: number };
    correctAnswersByDifficulty: { [key: string]: number };
    totalQuestionsByType: { [key: string]: number };
    correctAnswersByType: { [key: string]: number };
}
export enum StatisticType {
    Category = "Category",
    Difficulty = "Difficulty",
    Type = "Type",
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
        incrementStats: (
            state,
            action: PayloadAction<{
                type: StatisticType;
                key: string;
                amount: number;
                correctAnswers: number;
            }>
        ) => {
            const { type, key, amount, correctAnswers } = action.payload;

            state.totalQuestionsAmount += amount;
            state.totalCorrectAnswers += correctAnswers;

            if (state[`totalQuestionsBy${type}`].hasOwnProperty(key)) {
                state[`totalQuestionsBy${type}`][key] += amount;
                state[`correctAnswersBy${type}`][key] += correctAnswers;
            } else {
                state[`totalQuestionsBy${type}`][key] = amount;
                state[`correctAnswersBy${type}`][key] = correctAnswers;
            }
        },
    },
});

export const { incrementStats } = statsSlice.actions;

export default statsSlice.reducer;
