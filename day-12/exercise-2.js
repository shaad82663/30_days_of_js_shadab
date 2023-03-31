// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const mostFrequentWords = (p, n) => {
    const freq = {}
    const words = p.split(/\s/)
    for(var word of words){
        if(word.includes('.'))  word = word.substring(0, word.length-1)
        if(freq[word] == null) {
            freq[word] = 1
        }else freq[word]++
    }
    const sortedFrequency = Object.fromEntries(
        Object.entries(freq)
          .sort((a, b) => b[1] - a[1])
          .slice(0,n)
      );
      const freqWords = Object.keys(sortedFrequency)
      const freqWordsCount = Object.values(sortedFrequency)
      const res =[]
      for(let i = 0; i<n; i++) res.push({word : freqWords[i], count : freqWordsCount[i]})
    return res
}

console.log(mostFrequentWords(paragraph, 10))