const myFunctions = require('./functions.js');

test('Testing div -- success', () => {
    const target = 5;
    const result = myFunctions.div(30, 6);
    expect(target).toBe(result);
});

test('Testing div -- decimal', () => {
    const target = 2.2;
    const result = myFunctions.div(11, 5);
    expect(target).toBe(result);
});

test('Testing div -- first input 0', () => {
    const target = 0;
    const result = myFunctions.div(0, 20);
    expect(target).toBe(result);
});

test('Testing div -- div by 0', () => {
    const target = Infinity;
    const result = myFunctions.div(50, 0);
    expect(target).toBe(result);
});

test('Testing div -- div by negative', () => {
    const target = -5;
    const result = myFunctions.div(50, -10);
    expect(target).toBe(result);
});


test('Testing containsNumbers -- success', () => {
    const result = myFunctions.containsNumbers("hel1o");
    expect(result).toBeTruthy();
});

test('Testing containsNumbers -- start with number', () => {
    const result = myFunctions.containsNumbers("1hello");
    expect(result).toBeTruthy();
});

test('Testing containsNumbers -- end with number', () => {
    const result = myFunctions.containsNumbers("hello1");
    expect(result).toBeTruthy();
});

test('Testing containsNumbers -- multiple numbers', () => {
    const result = myFunctions.containsNumbers("1h2el3lo4");
    expect(result).toBeTruthy();
});

test('Testing containsNumbers -- only numbers', () => {
    const result = myFunctions.containsNumbers("123");
    expect(result).toBeTruthy();
});

test('Testing containsNumbers -- no numbers', () => {
    const result = myFunctions.containsNumbers("hello");
    expect(result).toBeFalsy();
});

test('Testing containsNumbers -- contains space', () => {
    const result = myFunctions.containsNumbers("hel lo");
    expect(result).toBeFalsy();
});

test('Testing containsNumbers -- start with number', () => {
    const result = myFunctions.containsNumbers("1hello");
    expect(result).toBeTruthy();
});

test('Testing containsNumbers -- random symbols', () => {
    const result = myFunctions.containsNumbers("hel*lo//");
    expect(result).toBeFalsy();
});

test('Testing containsNumbers -- empty string', () => {
    const result = myFunctions.containsNumbers("");
    expect(result).toBeFalsy();
});

test('Testing containsNumbers -- start with number', () => {
    const result = myFunctions.containsNumbers("1hello");
    expect(result).toBeTruthy();
});