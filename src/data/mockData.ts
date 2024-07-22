// Mock data
export const questions = [
    {
        id: 1,
        text: "What is the capital of France?",
        type: "multiple",
        category: "Geography",
    },
    {
        id: 2,
        text: "The Great Pyramid of Giza is located in which country?",
        type: "boolean",
        category: "History",
    },
    {
        id: 3,
        text: "What is the capital of France?",
        type: "multiple",
        category: "Geography",
    },
    {
        id: 4,
        text: "The Great Pyramid of Giza is located in which country?",
        type: "boolean",
        category: "History",
    },
    {
        id: 5,
        text: "What is the capital of France?",
        type: "multiple",
        category: "Geography",
    },
    {
        id: 6,
        text: "The Great Pyramid of Giza is located in which country?",
        type: "boolean",
        category: "History",
    },
];

export const answers = [
    { id: 1, text: "Paris" },
    { id: 2, text: "London" },
    { id: 3, text: "Berlin" },
    { id: 4, text: "Minsk" },
    { id: 5, text: "True" },
    { id: 6, text: "False" },
    { id: 7, text: "Berlin" },
    { id: 8, text: "Minsk" },
    { id: 9, text: "Madrid" },
    { id: 10, text: "London" },
    { id: 11, text: "Berlin" },
    { id: 12, text: "Berlin" },
    { id: 13, text: "Minsk" },
    { id: 14, text: "Madrid" },
    { id: 15, text: "London" },
    { id: 16, text: "Berlin" },
];

export const questionAnswers = [
    { questionId: 1, answerIds: [1, 2, 3, 4], correct: [1, 2] },
    { questionId: 2, answerIds: [5, 6], correct: [5] },
    { questionId: 3, answerIds: [7, 8, 9, 10], correct: [7, 8] },
    { questionId: 4, answerIds: [5, 6], correct: [6] },
    { questionId: 5, answerIds: [13, 14, 15, 16], correct: [14, 15] },
    { questionId: 6, answerIds: [5, 6], correct: [5] },
];
