import {Questions, Table, Answers} from "./types";

const table: Table = {
    'Синица': [true, false, false],
    'Свинья': [true, true, false],
    'Сардина': [true, false, true],
    'Попугай': [false, false, true],
    'Тигр': [false, true, true],
    'Ворона': [false, false, false],
    'Слон': [true, true, true],
    'Жираф': [false, true, false],
};

const questions: Questions = [
    'Название начинается на С?',
    'Животное преимущественно земное?',
    'Кол-во букв 7 или 4?',
];

export const findAnimal = () => {
    let animals = Object.keys(table).concat(',');
    console.log(`Загадайте животное из списка: ${animals}`);

    const answers: Answers = [];

    for (let idx = 0; idx < questions.length; idx++) {
        let answer = prompt(questions[idx]);

        if (answer === 'y') {
            answers.push(true);
        } else {

            answers.push(false);
        };
    };

    for (let key in table) {
        if (JSON.stringify(table[key]) === JSON.stringify(answers)) {
            console.log(`Это ${key}`);
            break;
        };
    };
};

