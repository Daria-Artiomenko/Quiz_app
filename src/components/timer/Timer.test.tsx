import { render } from "@testing-library/react";
import Timer from "./Timer";

describe("Timer", () => {
    test("renders the initial time correctly", () => {
        const { getByText } = render(<Timer time={120} onTimeUp={() => {}} />);
        expect(getByText("Time:")).toBeInTheDocument();
        expect(getByText("02:00")).toBeInTheDocument();
    });
    test("calls onTimeUp when time reaches zero", () => {
        const onTimeUp = jest.fn();
        const { getByText } = render(<Timer time={1} onTimeUp={onTimeUp} />);
        expect(getByText("Time:")).toBeInTheDocument();
        expect(getByText("00:01")).toBeInTheDocument();
        expect(onTimeUp).not.toHaveBeenCalled();
    });
    test("handles zero time correctly", () => {
        const onTimeUp = jest.fn();
        const { getByText } = render(<Timer time={0} onTimeUp={onTimeUp} />);
        expect(getByText("Time:")).toBeInTheDocument();
        expect(getByText("00:00")).toBeInTheDocument();
        expect(onTimeUp).toHaveBeenCalled();
    });
});
