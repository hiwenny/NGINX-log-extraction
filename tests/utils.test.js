const utils = require('../src/utils')

describe('parseLogContent', () => {
  it('converts the streams of log into an array', () => {
    const mockLogStream = '12.345.67.89 - admin [11/Jul/2018:17:31:56 +0200] "GET /something.js HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6"\n98.76.64.32 - - [11/Jul/2018:17:42:07 +0200] "GET /to-an-sample-site HTTP/1.1" 500 3574 "-" "Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0"'
    expect(utils.parseLogContent(mockLogStream).length).toBe(2)
  })
  it('cleans the falsey entries', () => {
    const falseyLogStream = '\n\n12.345.67.89 - admin [11/Jul/2018:17:31:56 +0200] "GET /something.js HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6"\n98.76.64.32 - - [11/Jul/2018:17:42:07 +0200] "GET /to-an-sample-site HTTP/1.1" 500 3574 "-" "Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0"'
    expect(utils.parseLogContent(falseyLogStream).length).toBe(2)
  })
})

describe('getCleanSubList', () => {
  it('creates a new array of matched parts from the reference array', () => {
    const refArray = ['something', 'some0thing', 'some-thing', 'a']
    expect(utils.getCleanSubList(refArray, '(.+?)0')).toEqual(['some'])
  })
})

describe('getUniqueFromList', () => {
  it('de-duplicates the passed in array', () => {
    const refArray = ['something', 'some0thing', 'something', 'else']
    expect(utils.getUniqueFromList(refArray)).toEqual(['something', 'some0thing', 'else'])
  })
})

describe('getOccurrences', () => {
  it('de-duplicates the passed in array', () => {
    const refArray = ['something', 'some0thing', 'example']
    const targetArray = ['something', 'somethingssss', 'example', 'ssssomethingggg', 'example', 'some0thing']
    expect(utils.getOccurrences(targetArray, refArray, 'sampleKey')).toEqual([
      {
        sampleKey: 'something',
        occurrences: 1 
      },
      {
        sampleKey: 'some0thing',
        occurrences: 1 
      },
      {
        sampleKey: 'example',
        occurrences: 2
      }
    ])
    expect(utils.getOccurrences(targetArray, ['somethingssss'], 'sampleKey')).toEqual([
      {
        sampleKey: 'somethingssss',
        occurrences: 1 
      }
    ])
    expect(utils.getOccurrences(targetArray, [], 'sampleKey')).toEqual([])
  })
})