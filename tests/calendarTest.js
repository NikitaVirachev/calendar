const mocha = require('mocha');
const chai = require('chai');

const createCalendar = require('../src/createCalendar');

const expect = chai.expect;

describe('Calendar Test', () => {
    it('Сhecking december 2019', () => {
        let year = 2019;
        let month = 11;
        let date = new Date(year, month);

        let calendar = createCalendar(date, year, month);
        expect(calendar).to.eql([
            [null, null, null, null, null, null, 1],
            [2, 3, 4, 5, 6, 7, 8],
            [9, 10, 11, 12 , 13, 14, 15],
            [16, 17, 18, 19, 20, 21, 22],
            [23, 24, 25, 26, 27, 28, 29],
            [30, 31, null, null, null, null, null]
        ]);
    }),
    it('Сhecking september 1998', () => {
        let year = 1998;
        let month = 8;
        let date = new Date(year, month);

        let calendar = createCalendar(date, year, month);
        expect(calendar).to.eql([
            [null, 1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12, 13],
            [14, 15, 16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25, 26, 27],
            [28, 29, 30, null, null, null, null],
            [null, null, null, null, null, null, null]
        ]);
    }),
    it('Month absence check', () => {
        let year = 1998;
        let month = 13;
        let date = new Date(year, month);

        let calendar = createCalendar(date, year, month);
        expect(calendar).to.eql([
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]
        ]);
    }),
    it('Year absence check', () => {
        let year = 1969;
        let month = 8;
        let date = new Date(year, month);

        let calendar = createCalendar(date, year, month);
        expect(calendar).to.eql([
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]
        ]);
    });
});