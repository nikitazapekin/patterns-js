const car={
    wheels:4,
    init() {
        console.log(` wheels ${this.wheels} ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: "Dimass"
    }
})

console.log(carWithOwner.__proto__===car)
carWithOwner.init()
//carWithOwner.