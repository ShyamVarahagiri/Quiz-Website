type optionProps = {
    value: string,     // Option string
    correct: boolean,  // Whether the option is a correct answer
    index: number,     // Question number
    selected: string,  // Currently selected option
}

type Answer = {
    c: string[],
    w: string[],
};

type questionProps = {
    data: { [key: string]: Answer },
    index: number,
    selected: string
};

export type {
    optionProps,
    Answer,
    questionProps
};