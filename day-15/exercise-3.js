const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics{
    
    count() {
        return ages.length
    }
    sum() {
        let sum = ages.reduce((acc, el) => acc + el)
        return sum
    }
    min(){
      return Math.min(...ages)
    }
    max(){
        return Math.max(...ages)
      }
    range(){
        return this.max() - this.min()
    }
    mean(){
        return Math.ceil(this.sum()/ages.length)
    }
    median(){
        ages.sort((a,b) => a-b)
        let mid = Math.floor(ages.length/2);
        if (ages.length % 2 == 0) {
            return (ages[mid - 1] + ages[mid]) / 2;
          } else {
            return ages[mid];
          }
    }

     mode() {
        var mode = {};
        var maxCount = 1;
        var modes = [];
      
        for (var i = 0; i < ages.length; i++) {
          var num = ages[i];
          if (mode[num] == null) {
            mode[num] = 1;
          } else {
            mode[num]++;
          }
          if (mode[num] > maxCount) {
            modes = [num];
            maxCount = mode[num];
          } else if (mode[num] == maxCount) {
            modes.push(num);
          }
        }
      
        if (modes.length == Object.keys(mode).length) {
          modes = [];
        }

        return modes[0];
      }      
    var(){
        let mean = this.mean()
        let sum = 0
        for(const age of ages){
            let x = age - mean
            x *= x
            sum += x
        }
        return sum/ages.length
    }
    std(){
      return Math.sqrt(this.var())    
    }

    freqDist(){
      const freq = {};
      for(const age of ages){
        if(freq[age] == null)  freq[age] = 1
        else  freq[age]++
      }
      return freq
    }
   
}

const statistics = new Statistics()
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ',statistics.freqDist()) 
