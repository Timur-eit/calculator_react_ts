import { calculate } from 'utils/calculator';
import { PLUS, MINUS } from 'constants/constants';

describe.skip('simplePurser - parser without multiply, divide, percantage and brackets', () => {
    
    test('simplePurser parse simple (ONE action)', () => {
        const expresion1 = `2${PLUS}2`;
        const expresion2 = `22${PLUS}22`;
        
        expect(calculate([2, "^", 2, "*", 4])).toEqual(16);
        expect(calculate([2, "√", 4, '+', 4])).toEqual(6);
        expect(calculate([2, "√", 4, '+', 4, '-', 1])).toEqual(5);
    });
});