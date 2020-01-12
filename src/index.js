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

// • The number of unique IP addresses
const IPArray = utils.getSubList(logArray, regexPatterns.IP)
const uniqueIPs = utils.getUniqueFromList(IPArray)

const URLArray = utils.getSubList(logArray, regexPatterns.URL)
const uniqueURLs = utils.getUniqueFromList(URLArray)

console.log('The number of unique IP addresses is', uniqueIPs.length)
console.log(uniqueIPs)
console.log('The number of unique URL addresses is', uniqueURLs.length)
console.log(uniqueURLs)

// utils.getTopThree(uniqueIPs, utils.getSubList())

// console.log('The top 3 most active IP addresses are', uniqueIPs.length)
// console.log('The top 3 most visited URLs are', uniqueIPs.length)
