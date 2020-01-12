
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

// The drawback of this is that this only makes very specific identifier object
// Such as [ { IP: '000.00.000.00'}, occurences: 1 } ] or [ { URL: '/something'}, occurences: 1 } ]
// Is there a better way? Then again occurences is a shared keyword...
// Unless we do something like "occurences" table
// { 
//   occurences: {
//     IP: {
//       '00.000.000.00': 1,
//       '00.000.000.01': 1,
//     }
//     '/something': 3,
//     '/something-else': 1,
//   }
// }
// Depends on future use, that might be over-engineering though.

function countOccurences(fullList, uniqueList, identifier) {
  return uniqueList.map(item => {
    const occurences = fullList.reduce( (accumulator, currentValue, i) => {
      if (currentValue === item) return accumulator + 1
      return accumulator
    }, 0)
    return {[identifier]: item, occurences}
  })
}

module.exports = {
  parseLogContent,
  getSubList,
  getUniqueFromList,
  countOccurences
}