class Database {
    constructor(data) {
        if(Database.exists){
            return Database.instance
        }
        Database.instance= this
        Database.exists =true
        this.data=data
    }
    getData(){
        return this.data
    }
}

const mongo = new Database('mongoDb')
console.log(mongo.getData())

const mySql = new Database('mySql')
console.log(mySql.getData())