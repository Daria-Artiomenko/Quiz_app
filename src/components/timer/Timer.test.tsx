import { render } from "@testing-library/react";
import Timer from "./Timer";

const onTimeUp = jest.fn();
const setup = ({ time }: { time: number }) =>
    render(<Timer time={time} onTimeUp={onTimeUp} />);

describe("Timer", () => {
    afterEach(jest.resetAllMocks);
    it("renders the initial time correctly", () => {
        const { getByText } = setup({ time: 120 });
        expect(getByText("Time:")).toBeInTheDocument();
        expect(getByText("02:00")).toBeInTheDocument();
    });
    it("calls onTimeUp when time reaches zero", () => {
        const { getByText } = setup({ time: 1 });
        expect(getByText("Time:")).toBeInTheDocument();
        expect(getByText("00:01")).toBeInTheDocument();
        expect(onTimeUp).not.toHaveBeenCalled();
    });
    it("handles zero time correctly", () => {
        const { getByText } = setup({ time: 0 });
        expect(getByText("Time:")).toBeInTheDocument();
        expect(getByText("00:00")).toBeInTheDocument();
        expect(onTimeUp).toHaveBeenCalled();
    });
});
