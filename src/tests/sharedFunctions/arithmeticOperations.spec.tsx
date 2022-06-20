import { sum, subtract, multiply, divide, square, percentage } from 'utils/arithmeticOperations';
import { ERROR } from 'constants/constants';

describe(
    'basic arithmetic operations: addition, subtraction, multiplication, division, square, percentage (EXCLUDE brackets)', () => {
        test('addition', () => {
            // int
            expect<number>(sum(2, 2)).toEqual<number>(4);
            expect<number>(sum(-1000, -1)).toEqual<number>(-1001);
            // decimal
            expect<number>(sum(-0.5, -0.5)).toEqual<number>(-1);
            expect<number>(sum(0.00001, 0.5)).toEqual<number>(0.50001);
        });

        test('subtraction', () => {
            // int
            expect<number>(subtract(2, 2)).toEqual<number>(0);
            // decimal
            expect<number>(subtract(0.00001, 0.5)).toEqual<number>(-0.49999);
        });

        test('multiplication', () => {
            // int
            expect<number>(multiply(2, 2)).toEqual<number>(4);
            expect<number>(multiply(0, 0)).toEqual<number>(0);
            // decimal
            expect<number>(multiply(0.00001, 0.5)).toEqual<number>(0.000005);
        });

        test('division', () => {
            // int
            expect<number | string>(divide(1000, 2)).toEqual<number>(500);
            expect<number | string>(divide(2, 1000)).toEqual<number>(0.002);
            // decimal
            expect<number | string>(divide(-0.0001, 0.1)).toEqual<number>(-0.001);
        });

        test('division by 0 should return an error message', () => {
            expect<number | string>(divide(1, 0)).toEqual<string>(ERROR);
        });

        test('square', () => {
            expect<number | string>(square(625)).toEqual(25);
        });
        
        test('square with negative should return an error message', () => {
            expect<number | string>(square(-625)).toEqual(ERROR);
        });

        test('percantage', () => {
            expect<number>(percentage(1)).toEqual<number>(0.01);
            expect<number>(percentage(100)).toEqual<number>(1);
            expect<number>(percentage(-500)).toEqual<number>(-5);
        });

});