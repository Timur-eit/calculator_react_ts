export type ArithmeticFunction = (a: number, b: number) => number | string;

export interface IOperation {
    [key: string]: ArithmeticFunction;
}
