export interface Option {
    value: string;
    label: string;
}
export const categories: Option[] = [
    { value: "9", label: "General Knowledge" },
    { value: "10", label: "Entertainment: Books" },
    { value: "11", label: "Entertainment: Film" },
    { value: "12", label: "Entertainment: Music" },
    { value: "13", label: "Entertainment: Musicals & Theatres" },
    { value: "14", label: "Entertainment: Television" },
    { value: "15", label: "Entertainment: Video Games" },
    { value: "16", label: "Entertainment: Board Games" },
    { value: "18", label: "Science: Computers" },
    { value: "19", label: "Science: Mathematics" },
    { value: "20", label: "Mythology" },
    { value: "21", label: "Sports" },
    { value: "22", label: "Geography" },
    { value: "23", label: "History" },
];

export const difficulties: Option[] = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
];

export const types: Option[] = [
    { value: "multiple", label: "Multiple Choice" },
    { value: "boolean", label: "True/False" },
];

export const times: Option[] = [
    { value: "1", label: "1 minute" },
    { value: "2", label: "2 minutes" },
    { value: "5", label: "5 minutes" },
];
