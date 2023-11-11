/*function Server(name, ip){ Паттерн конструктора для ES5
this.name=name
this.ip=ip
}
Server.prototype.getUrl=function() {
    return `https://${this.ip}:80`
}

const aws = new Server('AWS', '82.21.23.43')
console.log(aws.getUrl())

*/

//Паттерн коснтруктора для es6:
 class Server {
    constructor(name, ip){
this.name= name
this.ip = ip
    }
    getUrl=function() {
        return `https://${this.ip}:80`
    }
 }
 const aws = new Server('AWS', '82.21.23.43')
console.log(aws.getUrl())