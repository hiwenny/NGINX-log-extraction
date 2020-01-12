// Tasks:
// • The number of unique IP addresses
// • The top 3 most active IP addresses
// • The top 3 most visited URLs
// Plan:
// Read file
// Get unique IPs
// Count unique IPs
// Sort/accumulate IPs (is there a need to sort or just one-by-one? 
// Rank IPs
// Do the same for URLs

const regexPatterns = {
  IP: '(.+?) -',
  URL: '"GET (.+?) HTTP/1.1"'
}

const logArray = getLogContent(process.argv[2])
const uniqueIPs = getUniqueFromList(logArray, regexPatterns.IP)
const uniqueURLs = getUniqueFromList(logArray, regexPatterns.URL)

console.log('The number of unique IP addresses is', uniqueIPs.length)
console.log(uniqueIPs)
console.log('The number of unique URL addresses is', uniqueURLs.length)
console.log(uniqueURLs)

// console.log('The top 3 most active IP addresses are', uniqueIPs.length)
// console.log('The top 3 most visited URLs are', uniqueIPs.length)

/** 
 * Loader function, outputs an array of logs.
 * @param {string} pathname Pathname of the file to be loaded.
*/
function getLogContent(pathname) {
  const fs = require('fs')
  const logArray = fs.readFileSync(pathname, 'utf8').split('\n')
  return logArray.filter(log => !!log)
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
