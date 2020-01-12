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


const logArray = getLogContent(process.argv[2])
const uniqueIPs = getUniqueIPs(logArray)

console.log('The number of unique IP addresses is', uniqueIPs.length)
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
 * @param {array} logArray Array containing IP addresses to be selected.
 */
function getUniqueIPs(logArray) {
  const IPArray = logArray.map(log => log.match('(.+?) -')[1])
  return Array.from(new Set(IPArray))
}


// function getTopThree(uniqueList, fullList) {

// }
