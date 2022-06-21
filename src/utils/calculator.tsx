import { ArithmeticFunction, IOperation } from 'interfaces/interfaces';
import {
    POWER,
    SQUARE,
    MULTIPLICATION,
    DIVISION,
    PLUS,
    MINUS,
    ERROR,
} from 'constants/constants';
import {
    power,
    square,
    multiply,
    divide,
    sum,
    subtract
} from 'utils/arithmeticOperations';

const operationPriority : Array<IOperation> = [
    {
        [POWER]: power,
        [SQUARE]: square,
        // TODO здесь должен быть именно квадратный корень
    },
    {
        [MULTIPLICATION]: multiply,
        [DIVISION]: divide,
    },
    {
        [PLUS]: sum,
        [MINUS]: subtract,
    }
];

export function calculate(chars: (string | number)[]): number | string {

    let operator: null | ArithmeticFunction = null;

    for (const operators of operationPriority) {

        const newTokens = [];

        for (const char of chars) {

            if (char in operators) {
                operator = operators[char];
            } else if (operator !== null) {
                const number1 = newTokens[newTokens.length - 1] as number;
                const number2 = char as number;
                newTokens[newTokens.length - 1] = operator(number1, number2);
                operator = null;
            } else {
                newTokens.push(char);
            }
        }
        chars = newTokens;
    }
    
    if (typeof chars[0] !== 'number') {
        return ERROR;
    } else {
        return chars[0];
    }
}