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

// This can be in own const/config file
const regexPatterns = {
  IP: '(.+?) -',
  URL: '"GET (.+?) HTTP/1.1"'
}

// Loading file
const fs = require('fs')
const utils = require('./utils')
const logContent = fs.readFileSync(process.argv[2], 'utf8')

// Transform and use
const logArray = utils.parseLogContent(logContent)
const uniqueIPs = utils.getUniqueFromList(logArray, regexPatterns.IP)
const uniqueURLs = utils.getUniqueFromList(logArray, regexPatterns.URL)

console.log('The number of unique IP addresses is', uniqueIPs.length)
console.log(uniqueIPs)
console.log('The number of unique URL addresses is', uniqueURLs.length)
console.log(uniqueURLs)

// console.log('The top 3 most active IP addresses are', uniqueIPs.length)
// console.log('The top 3 most visited URLs are', uniqueIPs.length)
