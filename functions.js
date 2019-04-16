function make_array (length) {
    var array = [];
    for (i = 0; i < length; i++) {
        array.push(i * 2);
    }
    return array;
}
function binary_search (array, answer) {
    var startIndex = 0,
        stopIndex = array.length - 1,
        midIndex = Math.floor((startIndex + stopIndex) / 2),
        mid = array[midIndex],
        count = 0;
     do {
        count++;
        if (mid < answer) {
            startIndex = midIndex + 1;
        }
        if (mid > answer) {
            stopIndex = midIndex - 1;
        }
         midIndex = Math.floor((startIndex + stopIndex) / 2);
         mid = array[midIndex];
    } while (mid != answer && startIndex < stopIndex)
    console.log("The answer is " + answer + " at index " + midIndex + ". No. guesses: " + count)
}