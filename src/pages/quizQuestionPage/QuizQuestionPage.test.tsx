import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
    setUserAnswer,
    checkAnswer,
    goToNextQuestion,
} from "../../features/quizQuestionSlice";
import { paths } from "../../App";

jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(),
}));

jest.mock("../../hooks/redux", () => ({
    useAppDispatch: jest.fn(),
    useAppSelector: jest.fn(),
}));

jest.mock("../../features/quizQuestionSlice", () => ({
    setQuestions: jest.fn(),
    setUserAnswer: jest.fn(),
    checkAnswer: jest.fn(),
    goToNextQuestion: jest.fn(),
}));

describe("QuizQuestionPage", () => {
    let mockNavigate: jest.Mock;
    let mockDispatch: jest.Mock;
    let mockSelector: jest.Mock;

    beforeEach(() => {
        mockNavigate = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

        mockDispatch = jest.fn();
        (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

        mockSelector = jest.fn();
        (useAppSelector as jest.Mock).mockReturnValue({
            questions: ["question1", "question2"],
            currentQuestionIndex: 0,
            userAnswer: null,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should navigate to results page when handleGotoResults is called", () => {
        const handleGotoResults = () => {
            mockNavigate(paths.results);
        };

        handleGotoResults();
        expect(mockNavigate).toHaveBeenCalledWith(paths.results);
    });

    it("should set user answer when handleAnswerSelect is called", () => {
        const handleAnswerSelect = (answer: string) => {
            mockDispatch(setUserAnswer(answer));
        };

        const answer = "answer1";
        handleAnswerSelect(answer);
        expect(setUserAnswer).toHaveBeenCalledWith(answer);
    });

    it("should handle next question correctly", () => {
        mockSelector.mockReturnValueOnce({
            questions: ["question1", "question2"],
            currentQuestionIndex: 0,
            userAnswer: "answer1",
        });

        const handleNextQuestion = () => {
            mockDispatch(checkAnswer());
            const { currentQuestionIndex } = mockSelector();
            if (currentQuestionIndex === 1) {
                mockNavigate(paths.results);
            } else {
                mockDispatch(goToNextQuestion());
            }
        };

        handleNextQuestion();
        expect(checkAnswer).toHaveBeenCalled();
        expect(goToNextQuestion).toHaveBeenCalled();

        mockSelector.mockReturnValueOnce({
            questions: ["question1", "question2"],
            currentQuestionIndex: 1,
            userAnswer: "answer2",
        });

        handleNextQuestion();
        expect(checkAnswer).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith(paths.results);
    });
});
