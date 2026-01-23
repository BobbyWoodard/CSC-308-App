const Portfolio = require('./stockPortfolio.js');

// Yes, I followed the TDD approach with the cycle and it worked out pretty successfully. Writing the test cases
// first helped a lot to figure out exactly what I intended to create and execute it efficiently, rather than
// jumping straight in and hoping for the best. I think this is a really helpful practice that I can use in
// future programs to help better plan and execute my code in a safe, tested manner.


test('New Portfolio should be empty', () => {
    const target = {};
    const portfolio = new Portfolio();
    expect(target).toStrictEqual(portfolio.stocks);
});

test('Testing isEmpty -- success', () => {
    const portfolio = new Portfolio();
    const result = portfolio.isEmpty();
    expect(result).toBeFalsy();
});

test('Testing purchase -- new stock', () => {
    const target = {
        "NVDA": 5
    }
    const portfolio = new Portfolio();
    portfolio.purchase("NVDA", 5);
    expect(target).toStrictEqual(portfolio.stocks);
});

test('Testing purchase -- existing stock', () => {
    const target = {
        "NVDA": 10
    }
    const portfolio = new Portfolio();
    portfolio.purchase("NVDA", 3);
    portfolio.purchase("NVDA", 7);
    expect(target).toStrictEqual(portfolio.stocks);
});

test('Testing sell -- existing stock', () => {
    const target = {
        "NVDA": 2
    }
    const portfolio = new Portfolio();
    portfolio.purchase("NVDA", 10);
    portfolio.sell("NVDA", 8);
    expect(target).toStrictEqual(portfolio.stocks);
});

test('Testing sell -- non-existing stock', () => {
    const portfolio = new Portfolio();
    portfolio.sell("NVDA", 8);
    expect(portfolio.stocks).toStrictEqual({});
});

test('Testing uniqueStocks -- success', () => {
    const target = 3
    const portfolio = new Portfolio();
    portfolio.purchase("NVDA", 4);
    portfolio.purchase("GMR", 7);
    portfolio.purchase("RBLX", 12);
    const result = portfolio.uniqueStocks();
    expect(target).toBe(result);
});

test('Testing sell -- sell all shares', () => {
    const portfolio = new Portfolio();
    portfolio.purchase("NVDA", 8);
    portfolio.sell("NVDA", 8);
    expect(portfolio.stocks).toStrictEqual({});
});

test('Testing sell -- sell some shares', () => {
    const target = {
        "NVDA": 3
    }
    const portfolio = new Portfolio();
    portfolio.purchase("NVDA", 8);
    portfolio.sell("NVDA", 5);
    expect(portfolio.stocks).toStrictEqual(target);
});

test('Testing getShares -- success', () => {
    const target = 5
    const portfolio = new Portfolio();
    portfolio.purchase("NVDA", 8);
    portfolio.sell("NVDA", 3);
    const result = portfolio.getShares("NVDA");
    expect(result).toBe(target);
});

test('Testing sell -- sell more than owned', () => {
    const portfolio = new Portfolio();
    portfolio.purchase("NVDA", 8);
    expect(() => portfolio.sell("NVDA", 20)).toThrow();
});