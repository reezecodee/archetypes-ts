import { format } from "./utils/decorator-utils"; 

class User {
    @format('uppercase')
    name: string

    constructor(name: string){
        this.name = name
    }
}

const user = new User('Avicenna')
console.log(`Name lama: ${user.name}`)

user.name = 'Azfa Al Harits'

console.log(`Name baru: ${user.name}`)