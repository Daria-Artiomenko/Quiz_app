import { render, screen, fireEvent } from "@testing-library/react";
import NumberInput from "./NumberInput";

const mockOnChange = jest.fn();
const setup = () =>
    render(
        <NumberInput
            label='Number of Questions'
            value='10'
            onChange={mockOnChange}
            min={5}
            max={15}
        />
    );

describe("NumberInput", () => {
    it("should render the label correctly", () => {
        setup();
        expect(
            screen.getByLabelText("Number of Questions:")
        ).toBeInTheDocument();
    });

    it("should render the input with the correct value", () => {
        setup();
        expect((screen.getByRole("spinbutton") as HTMLInputElement).value).toBe(
            "10"
        );
    });

    it("should call the onChange callback when the input value changes", () => {
        setup();
        fireEvent.change(screen.getByRole("spinbutton"), {
            target: { value: "12" },
        });
        expect(mockOnChange).toHaveBeenCalledWith("12");
    });
});
