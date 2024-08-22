import { render, screen, fireEvent } from "@testing-library/react";
import NumberInput from "./NumberInput";
describe("NumberInput", () => {
    it("should render the label correctly", () => {
        render(
            <NumberInput
                label='Number of Questions'
                value='10'
                onChange={() => {}}
                min={5}
                max={15}
            />
        );
        expect(
            screen.getByLabelText("Number of Questions:")
        ).toBeInTheDocument();
    });

    it("should render the input with the correct value", () => {
        render(
            <NumberInput
                label='Number of Questions'
                value='10'
                onChange={() => {}}
                min={5}
                max={15}
            />
        );
        expect((screen.getByRole("spinbutton") as HTMLInputElement).value).toBe(
            "10"
        );
    });

    it("should call the onChange callback when the input value changes", () => {
        const mockOnChange = jest.fn();
        render(
            <NumberInput
                label='Number of Questions'
                value='10'
                onChange={mockOnChange}
                min={5}
                max={15}
            />
        );
        fireEvent.change(screen.getByRole("spinbutton"), {
            target: { value: "12" },
        });
        expect(mockOnChange).toHaveBeenCalledWith("12");
    });
});
