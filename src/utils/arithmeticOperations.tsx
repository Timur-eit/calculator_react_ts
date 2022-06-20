import { ERROR } from "constants/constants";

export function sum(number1: number, number2: number): number {
    return number1 + number2;
}

export function subtract(number1: number, number2: number): number {
    return number1 - number2;
}

export function multiply(number1: number, number2: number): number {
    return number1 * number2;
}

export function divide(number1: number, number2: number): number | string {
    if (number2 === 0) {
        return ERROR;
    }     
    return number1 / number2;
}

export function square(number: number): number | string {
    if (number < 0) {
        return ERROR;
    }     
    return Math.sqrt(number);
}

export const percentage = (number: number): number => number / 100;