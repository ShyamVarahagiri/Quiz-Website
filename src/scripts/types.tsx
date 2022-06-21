type optionProps = {
    value: string,     // Option string
    correct: boolean,  // Whether the option is a correct answer
    index: number,     // Question number
    selected: string,  // Currently selected option
}

type answer = {
    c: string[],
    w: string[],
};

type questionProps = {
    data: { question: string, correctAnswer: string, incorrectAnswers: string[] },
    index: number,
    select: string
    setScore: () => void
};

type question = { [key: string]: answer; }

export type {
    optionProps,
    answer,
    questionProps,
    question
};