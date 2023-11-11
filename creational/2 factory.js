/*
здесь мы создали некую абстракцию объединяющую классы воедино
*/
class SimpleMembership {
    constructor(name){
this.name=name
this.cost=50
    }
}


class StandartMembership {
    constructor(name){
this.name=name
this.cost=150
    }
}
class PremiumMembership {
    constructor(name){
this.name=name
this.cost=250
    }
}

class MemberFactory {
    static list ={
        simple: SimpleMembership,
        standart: StandartMembership,
        premium: PremiumMembership
    }
create(name, type='simple'){
const MemberShip = MemberFactory.list[type] || MemberFactory.list.simple
const member = new MemberShip(name)
member.type=type
member.define= function(){
    console.log(`${this.name} (${this.type}) (${this.cost })`)
}
return member;

}
}
 
const factory = new MemberFactory()
const members= [
    factory.create('Vladilen', 'simple'),
    factory.create('Elena', 'premium'),
    factory.create('vas', 'standard'),
    factory.create('Ivan', 'premium'),
    factory.create('Petr', 'premium'),
    
]
console.log(members)

members.forEach((m)=> {
    m.define()
})