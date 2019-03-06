/*
Utility function that returns the total minutes since midnight.
@param - Date object
@return - {numeral} value of total minutes of day
*/
export function timeToMins(date) {
  return (date.getHours() * 60) + date.getMinutes();
}
/*
Utility function that takes an object that uses numeral keys and returns a map 
Ensures the keys are actually numerals and not strings
TO DO - add validation that only numeral keys are being added. For some reason if (Number(k) != NaN) doesn't work.
*/
export function numKeyToStrMap(obj) {
    let strMap = new Map();
    for (let k in obj) {
      strMap.set(Number(k), obj[k]);
    }
    return strMap;
}