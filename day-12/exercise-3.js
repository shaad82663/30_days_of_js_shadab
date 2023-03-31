const  sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

const res = sentence.replace(/[%$%#@&;!]/g, '')
console.log('Clean sentance:')
console.log(res)

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

console.log(mostFrequentWords(res, 3))