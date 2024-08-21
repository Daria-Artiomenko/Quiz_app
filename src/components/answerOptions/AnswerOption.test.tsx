import { render, fireEvent } from "@testing-library/react";
import AnswerOptions from "./AnswerOptions";

describe("AnswerOptions", () => {
    const mockAnswers = ["Answer 1", "Answer 2", "Answer 3"];
    const mockOnAnswerSelect = jest.fn();

    afterEach(() => {
        mockOnAnswerSelect.mockClear();
    });

    test("renders the correct number of answer options", () => {
        const { getAllByRole } = render(
            <AnswerOptions
                type='multiple'
                answers={mockAnswers}
                onAnswerSelect={mockOnAnswerSelect}
                userAnswer={null}
            />
        );
        const options = getAllByRole("checkbox");
        expect(options).toHaveLength(mockAnswers.length);
    });

    test("calls onAnswerSelect with the correct answer when an option is selected (multiple choice)", () => {
        const { getAllByRole } = render(
            <AnswerOptions
                type='multiple'
                answers={mockAnswers}
                onAnswerSelect={mockOnAnswerSelect}
                userAnswer={null}
            />
        );
        const options = getAllByRole("checkbox");
        fireEvent.click(options[1]);
        expect(mockOnAnswerSelect).toHaveBeenCalledWith(mockAnswers[1]);
    });

    test("calls onAnswerSelect with the correct answer when an option is selected (boolean)", () => {
        const { getAllByRole } = render(
            <AnswerOptions
                type='boolean'
                answers={mockAnswers}
                onAnswerSelect={mockOnAnswerSelect}
                userAnswer={null}
            />
        );
        const options = getAllByRole("radio");
        fireEvent.click(options[2]);
        expect(mockOnAnswerSelect).toHaveBeenCalledWith(mockAnswers[2]);
    });

    test("renders the correct checked state for the user-selected answer (multiple choice)", () => {
        const { getAllByRole } = render(
            <AnswerOptions
                type='multiple'
                answers={mockAnswers}
                onAnswerSelect={mockOnAnswerSelect}
                userAnswer={mockAnswers[1]}
            />
        );
        const options = getAllByRole("checkbox");
        expect(options[0]).not.toBeChecked();
        expect(options[1]).toBeChecked();
        expect(options[2]).not.toBeChecked();
    });

    test("renders the correct checked state for the user-selected answer (boolean)", () => {
        const { getAllByRole } = render(
            <AnswerOptions
                type='boolean'
                answers={mockAnswers}
                onAnswerSelect={mockOnAnswerSelect}
                userAnswer={mockAnswers[2]}
            />
        );
        const options = getAllByRole("radio");
        expect(options[0]).not.toBeChecked();
        expect(options[1]).not.toBeChecked();
        expect(options[2]).toBeChecked();
    });
});
