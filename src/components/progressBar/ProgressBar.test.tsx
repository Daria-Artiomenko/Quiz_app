import { render } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
    it("renders the correct question number", () => {
        const { getByText } = render(
            <ProgressBar currentIndex={3} totalQuestions={15} />
        );
        const questionNumber = getByText("Question 4 out of 15");

        expect(questionNumber).toBeInTheDocument();
    });
});
