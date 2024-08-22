import { getTimeSpent } from "./QuizResults";

describe("getTimeSpent", () => {
    it("should return '0:00' when startTime is null", () => {
        const result = getTimeSpent(null);
        expect(result).toBe("0:00");
    });

    it("should calculate and return the time spent correctly", () => {
        const startTime = Date.now() - 123456;
        const result = getTimeSpent(startTime);
        expect(result).toBe("2:03");
    });
});
