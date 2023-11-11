class MySum{
constructor(initianValue=42){
    this.sum= initianValue
}

add(value){
    this.sum+=value
    return this
}
}

const sum1= new MySum()
console.log(sum1.add(8).add(9).add(11).sum)

const sum2= new MySum(0)
console.log(sum2.add(1).add(2).add(30).sum)

//стратегия мвс 