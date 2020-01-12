/** 
 * Loader function, outputs an array of logs.
 * @param {string} loadedLogContent Loaded string of log data to be converted into an array.
*/
function parseLogContent(loadedLogContent) {
  // Note: this only removes [null, undefined, ] - it does not validate.
  // So something like ['\n     '] will still be considered 1 entry.
  // It also doesn't care if the log is in the correct format.
  return loadedLogContent.split('\n').filter(log => !!log)
}

/**
 * Cleans up the array from duplicates, returns a new array of unique values.
 * @param {Array} selectedArray Array 
 */
function getUniqueFromList(selectedArray) {
  return Array.from(new Set(selectedArray))
}

/**
 * Extracts part of the entries according to a pattern, returns a new array of matched values.
 * @param {Array} logArray 
 * @param {Array} regexPattern 
 */
function getSubList(logArray, regexPattern) {
  return logArray.map(log => log.match(regexPattern)[1])
}

/**
 * Counts how many times something appeared by going through the reference array and looking up its values in the target array.
 * @param {Array} targetArray The array to be matched against for counting occurrences.
 * @param {Array} referenceArray The array to be used as reference.
 * @param {string} identifier Label for the returned object
 */
function getOccurrences(targetArray, referenceArray, identifier) {
  // The drawback of this is that this only makes very specific identifier object
  // Such as [ { IP: '000.00.000.00'}, occurrences: 1 } ] or [ { URL: '/something'}, occurrences: 1 } ]
  // This could be repurposed [{ IP: occurrences, uniqueness, etc }, { URL: occurrences, uniqueness }]
  // Depends on future use, that might be over-engineering, 
  // because there are other valid groupings, too, for example
  // we could do something like "occurrences" table
  // { 
  //   occurrences: {
  //     IPs: {
  //       '00.000.000.00': 1,
  //       '00.000.000.01': 1,
  //     }
  //     URLs: {
  //       '/something': 3,
  //       '/something-else': 1,
  //     }
  //   }
  // }
  return referenceArray.map(item => {
    const occurrences = targetArray.reduce( (accumulator, currentValue, i) => {
      if (currentValue === item) return accumulator + 1
      return accumulator
    }, 0)
    return {[identifier]: item, occurrences}
  })
}

module.exports = {
  parseLogContent,
  getSubList,
  getUniqueFromList,
  getOccurrences
}