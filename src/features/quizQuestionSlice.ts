import { createSlice } from "@reduxjs/toolkit";
import { IQuestion } from "../services/IQuestion";

export interface QuizQuestionState {
    startTime: number | null;
    questions: IQuestion[];
    currentQuestionIndex: number;
    userAnswer: string | null;
    correctAnswers: number;
}
const initialState: QuizQuestionState = {
    startTime: null,
    questions: [],
    currentQuestionIndex: 0,
    userAnswer: null,
    correctAnswers: 0,
};
export const quizQuestionSlice = createSlice({
    name: "quizQuestion",
    initialState,
    reducers: {
        startQuiz: (state) => {
            state.startTime = Date.now();
        },
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
        setUserAnswer: (state, action) => {
            state.userAnswer = action.payload;
        },
        checkAnswer: (state) => {
            const currentQuestion = state.questions[state.currentQuestionIndex];
            if (state.userAnswer === currentQuestion.correct_answer) {
                state.correctAnswers += 1;
            }
        },
        goToNextQuestion: (state) => {
            state.currentQuestionIndex += 1;
            state.userAnswer = null;
        },
        clearQuizData: (state) => {
            state.questions = [];
            state.currentQuestionIndex = 0;
            state.userAnswer = null;
            state.correctAnswers = 0;
        },
    },
});
export const {
    startQuiz,
    setQuestions,
    setUserAnswer,
    checkAnswer,
    goToNextQuestion,
    clearQuizData,
} = quizQuestionSlice.actions;
export default quizQuestionSlice.reducer;
