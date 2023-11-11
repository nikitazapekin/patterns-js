class Car {
    constructor(model, price){
        this.model=model
        this.price= price
    }
}


class CarFactory {
    constructor(){
        this.cars = []
    }


    create(model, price){
        const candidate= this.getCar(model)
if(candidate){
    return candidate
}
const newCar = new Car(model, price)
this.cars.push(newCar)
return newCar
    }
    getCar(model){
        return this.cars.find(car=>car.model===model)
    }
}
const factory = new CarFactory()
const bmwX6= factory.create('bmv', 10000)
console.log(bmwX6)


const audi= factory.create('audi', 103000)
console.log(bmwX6)


const bmv= factory.create('bmv', 103033300)
console.log(bmv)