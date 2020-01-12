
// ============= Utils start here =============== //
/** 
 * Loader function, outputs an array of logs.
 * @param {string} pathname Pathname of the file to be loaded.
*/
function parseLogContent(loadedLogContent) {
  // Note: this only removes [null, undefined, ] - it does not validate.
  // So something like ['\n     '] will still be considered 1 entry.
  // It also doesn't care if the log is in the correct format.
  return loadedLogContent.split('\n').filter(log => !!log)
}

/**
 * Selects the IP part of the string.
 * @param {logArray} logArray Array containing logs containing parts to be selected.
 * @param {regexPattern} regexPattern The pattern used for matching and selection.
 */
function getUniqueFromList(selectedArray) {
  return Array.from(new Set(selectedArray))
}

function getSubList(logArray, regexPattern) {
  return logArray.map(log => log.match(regexPattern)[1])
}

function getTopThree(fullList, uniqueList) {
  // // Can be its own function countOccurences() if used somewhere else,
  // // but since it's the only usage now...
  // const test = uniqueList.map(item => fullList.reduce((acc, currentValue, i) => item === currentValue && {acc[item]: acc[item]+1}), [])
  // console.log(test)
  // // First do a count using the -unique- array and tally,
  // // Does it have to be sorted, 
  // // Or do we just consume the whole thing and tally?
  // // Object or array?
  // // Object. Needs key: IP name, value: occurrence.
}

module.exports = {
  parseLogContent,
  getSubList,
  getUniqueFromList,
  getTopThree
}