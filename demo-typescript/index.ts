let str: string = 'ddd'
let num: number = Infinity

// let v1:void = null
let v2: void = undefined

let a: any = 1

let b: Object = 1

console.log(str)
console.log(num)
console.log(v2)
console.log(a)

interface People {
    name: string
    age: number
}

const xiaoli = (man:People):void => {
    console.log()
}

console.log()

xiaoli ({
    name:"xiaolizi",
    age: 18
})