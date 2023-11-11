function networkFetch(url){
    return  `${url} -server`
}

const cache= new Set()
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args)
{
    const url =args[0]
if(cache.has(url)){
    return `${url} = answer from cache`
}
else {
    cache.add(url)
    return Reflect.apply(target, thisArg, args)
}
}})
console.log(proxiedFetch('anguka,io'))
console.log(proxiedFetch('react.io'))
console.log(proxiedFetch('anguka,io'))


/*
anguka,io -server
9 proxy.js:18
react.io -server
9 proxy.js:19
anguka,io = answer from cache
*/