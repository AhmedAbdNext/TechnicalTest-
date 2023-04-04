import { findBiggestArea, generateHtmlSquare, generateSquare, getRandomColor } from "../src/square";

const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;


test("Should Generate Square with cells 5 width &  5 height and 5 colors", () => {
    const square = generateSquare(5,5,5);
    expect(square.length).toEqual(5);
    expect(square[0].length).toEqual(5);
    expect(square[0][0].color).toBeDefined();
    expect(square[0][0].x).toBeDefined();
    expect(square[0][0].y).toBeDefined();
});

test("Should Generate Square with cells 15 width &  15 height and 15 colors", () => {
    const square = generateSquare(15,15,15);
    expect(square.length).toEqual(15);
    expect(square[0].length).toEqual(15);
    expect(square[0][0].color).toBeDefined();
    expect(square[0][0].x).toBeDefined();
    expect(square[0][0].y).toBeDefined();
});

test("Should Generate Square with cells 45 width &  65 height and 25 colors", () => {
    const square = generateSquare(45,65,25);
    expect(square.length).toEqual(65);
    expect(square[0].length).toEqual(45);
    expect(square[0][0].color).toBeDefined();
    expect(square[0][0].x).toBeDefined();
    expect(square[0][0].y).toBeDefined();
});

test("Should Not Generate Square with cells 0 width", () => {
    const square = generateSquare(0,65,25);
    expect(square).toEqual(null);
});

test("Should Not Generate Square with cells 0 height", () => {
    const square = generateSquare(45,0,25);
    expect(square).toEqual(null);
});

test("Should Not Generate Square with 0 colors", () => {
    const square = generateSquare(45,65,0);
    expect(square).toEqual(null);
});

test("Should Not Generate Square with negative width", () => {
    const square = generateSquare(-45,65,25);
    expect(square).toEqual(null);
});

test("Should Not Generate Square with negative height", () => {
    const square = generateSquare(45,-65,25);
    expect(square).toEqual(null);
});

test("Should Not Generate Square with negative colors", () => {
    const square = generateSquare(45,65,-25);
    expect(square).toEqual(null);
});

test("Should Generate a HTMLDivElement", () => {
    const square = generateSquare(5,5,5);
    const htmlSquare = generateHtmlSquare(square);
    expect(htmlSquare).toBeInstanceOf(window.HTMLDivElement);
})

test("Should Generate a HTMLDivElement with 25 children", () => {
    const square = generateSquare(5,5,5);
    const htmlSquare = generateHtmlSquare(square);
    expect(htmlSquare.children.length).toEqual(25);
});

test("Should Generate a HTMLDivElement with 25 children with background color", () => {
    const square = generateSquare(5,5,5);
    const htmlSquare = generateHtmlSquare(square);
    expect(htmlSquare.children[0].style.backgroundColor).toBeDefined();
});

test("Should Not Generate a HTMLDivElement with 0 children", () => {
    const square = generateSquare(0,5,5);
    const htmlSquare = generateHtmlSquare(square);
    expect(htmlSquare).toBe(null);
})

test("Should Not Generate a HTMLDivElement with 0 children", () => {
    const square = generateSquare(5,0,5);
    const htmlSquare = generateHtmlSquare(square);
    expect(htmlSquare).toBe(null);
});

test("Should Not Generate a HTMLDivElement with 0 children", () => {
    const square = generateSquare(5,5,0);
    const htmlSquare = generateHtmlSquare(square);
    expect(htmlSquare).toBe(null);
});

test("Should Find The Biggest Area", () => {
    const square = generateSquare(5,5,5);
    const biggestArea = findBiggestArea(square);
    expect(biggestArea).toBeDefined();
    expect(biggestArea.size).toBeDefined();
    expect(biggestArea.color).toBeDefined();
})


test("Should Not Find The Biggest Area with 0 cells", () => {
    const square = generateSquare(0,5,5);
    const biggestArea = findBiggestArea(square);
    expect(biggestArea).toBe(null);
});

test("Should Not Find The Biggest Area with 0 cells", () => {
    const square = generateSquare(5,0,5);
    const biggestArea = findBiggestArea(square);
    expect(biggestArea).toBe(null);
});

test("Should Not Find The Biggest Area with 0 cells", () => {
    const square = generateSquare(5,5,0);
    const biggestArea = findBiggestArea(square);
    expect(biggestArea).toBe(null);
});

test("Should Get Random Color", () => {
    const color = getRandomColor();
    expect(color).toBeDefined();
});

test("Should Get Area Size", () => {
    const square = generateSquare(5,5,5);
    const area = findBiggestArea(square);
    expect(area.size).toBeDefined();
});

test("Should Not Get Area Color", () => {
    const square = generateSquare(0,5,5);
    const area = findBiggestArea(square);
    expect(area).toBe(null);
});

test("Should Not Get Area Color", () => {
    const square = generateSquare(5,0,5);
    const area = findBiggestArea(square);
    expect(area).toBe(null);
})

test("Should Not Get Area Color", () => {
    const square = generateSquare(5,5,0);
    const area = findBiggestArea(square);
    expect(area).toBe(null);
});


