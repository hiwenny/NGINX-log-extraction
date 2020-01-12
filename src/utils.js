
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
function getUniqueFromList(logArray, regexPattern) {
  const uniqueArray = logArray.map(log => log.match(regexPattern)[1])
  return Array.from(new Set(uniqueArray))
}

function getTopThree(uniqueList, fullList) {
  // First do a count using the -unique- array and tally,
  // Then find max
  // Does it have to be sorted, 
  // Or do we just consume the whole thing and tally?
}

module.exports = {
  parseLogContent,
  getUniqueFromList
}