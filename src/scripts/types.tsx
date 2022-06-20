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
    data: { [key: string]: answer },
    index: number,
    selected: string
};

type question = { [key: string]: answer; }

export type {
    optionProps,
    answer,
    questionProps,
    question
};