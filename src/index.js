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
const orderBy = require('lodash/orderBy')
const fs = require('fs')
const utils = require('./utils')

// This can be in own const/config file or duck-typed as it is
const regexPatterns = {
  IP: '(.+?) -',
  URL: '"GET (.+?) HTTP/1.1"'
}

// Loading file
const logContent = fs.readFileSync(process.argv[2], 'utf8')

// Main cleaned up array of logs
const logArray = utils.parseLogContent(logContent)

// • The number of unique IP addresses
const IPArray = utils.getSubList(logArray, regexPatterns.IP)
const uniqueIPArray = utils.getUniqueFromList(IPArray)
console.log('The number of unique IP addresses is', uniqueIPArray.length)

// • The top 3 most active IP addresses
// Note that top three ignores equal-occurence: so in reality it could be:
// 3,3,3,[3,3,2,1,1,1...] or 3,2,1,[1,1,1]... 
const sortedIPs = orderBy(utils.getOccurrences(IPArray, uniqueIPArray, 'IP'), ['occurrences'], ['desc'])
console.log('The top 3 most active IP addresses are:\n', sortedIPs[0].IP, '\n', sortedIPs[1].IP, '\n', sortedIPs[2].IP)

// • The top 3 most visited URLs
const URLArray = utils.getSubList(logArray, regexPatterns.URL)
const uniqueURLArray = utils.getUniqueFromList(URLArray)
const sortedURLs = orderBy(utils.getOccurrences(URLArray, uniqueURLArray, 'URL'), ['occurrences'], ['desc'])
console.log('The top 3 most visited URLs are:\n', sortedURLs[0].URL, '\n', sortedURLs[1].URL, '\n', sortedURLs[2].URL)
