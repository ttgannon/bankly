function timeWord(string) {

    const hoursWords = [
        "twelve", "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten", "eleven"
    ];

    const minutesWords = [
        "zero", "one", "two", "three", "four", "five", "six",
        "seven", "eight", "nine", "ten", "eleven", "twelve",
        "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two",
        "twenty-three", "twenty-four", "twenty-five", "twenty-six",
        "twenty-seven", "twenty-eight", "twenty-nine", "thirty",
        "thirty-one", "thirty-two", "thirty-three", "thirty-four",
        "thirty-five", "thirty-six", "thirty-seven", "thirty-eight",
        "thirty-nine", "forty", "forty-one", "forty-two", "forty-three",
        "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight",
        "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three",
        "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight",
        "fifty-nine", "sixty"
    ];
    
    let [hourString, minString] = string.split(':');
    hourString = parseInt(hourString);
    minString = parseInt(minString);

    let stamp = ['am', 'pm'];

    if(hourString === 0) {
        if (minString === 0) {
            return "midnight"
        }
    }

    if (hourString === 12) {
        if (minString === 0) {
            return "noon"
        }
    }

    if (hourString > 12) {
        hourString -= 12;
        hourString = hoursWords[hourString];
        stamp = stamp[1]
    } else if (hourString === 12) {
        hourString = 'twelve';
        stamp = stamp[1];
    } 
    else {
        hourString = hoursWords[hourString];
        stamp = stamp[0]
    }

    if (minString === 0) {
        minString = "o'clock";
    } else if (0 < minString && minString < 10) {
        minString = `oh ${minutesWords[minString]}`;
    } else {
        minString = minutesWords[minString];
    }

    let time = `${hourString} ${minString} ${stamp}`;
    return time
}

module.exports = timeWord;