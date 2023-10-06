const timeWord = require('./timeword.js');

describe('function timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('it converts string', () => {
    let string = "00:00";
    let time = timeWord(string);
    expect(time).toBe('midnight');
  });

  test('it converts string', () => {
    let string = "00:12";
    let time = timeWord(string);
    expect(time).toBe('twelve twelve am');
  });
  test('it converts string', () => {
    let string = "01:00";
    let time = timeWord(string);
    expect(time).toBe("one o'clock am");
  });
  test('it converts string', () => {
    let string = "06:01";
    let time = timeWord(string);
    expect(time).toBe('six oh one am');
  });
  test('it converts string', () => {
    let string = "06:10";
    let time = timeWord(string);
    expect(time).toBe('six ten am');
  });
  test('it converts string', () => {
    let string = "06:18";
    let time = timeWord(string);
    expect(time).toBe('six eighteen am');
  });
  test('it converts string', () => {
    let string = "06:30";
    let time = timeWord(string);
    expect(time).toBe('six thirty am');
  });
  test('it converts string', () => {
    let string = "10:34";
    let time = timeWord(string);
    expect(time).toBe('ten thirty-four am');
  });
  test('it converts string', () => {
    let string = "12:00";
    let time = timeWord(string);
    expect(time).toBe('noon');
  });
  test('it converts string', () => {
    let string = "12:09";
    let time = timeWord(string);
    expect(time).toBe('twelve oh nine pm');
  });
  test('it converts string', () => {
    let string = "23:23";
    let time = timeWord(string);
    expect(time).toBe('eleven twenty-three pm');
  });
});