import {from, interval, map, pluck, take} from "rxjs";


interval(100)
    .pipe(
        take(5),
        map(value => value * 2)
    )
    .subscribe(x => {
        console.log(x)
    })


from(['Mg Mg', 'Aung Aung'])
    .pipe(
        map(name => name.toUpperCase()),
        map(name => `I am ${name}`)
    )
    .subscribe(name => {
        console.log(name)
    })


let posts = [
    {name: "Mg Mg", age: 17},
    {name: "Aung Aung", age: 18},
]

from(posts)
    .pipe(
        pluck('name'),
        map(name => name.toUpperCase()),
    )
    .subscribe(value => {
        console.log(value)
    })