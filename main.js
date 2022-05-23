import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {select} from "./util";
import {fromEvent} from "rxjs";

const future = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hey")
    }, 3000)
})

// fromPromise(future)
//     .subscribe(resolve => {
//             console.log(resolve)
//         },
//     )


async function getUser(name) {
    return (await fetch(`https://api.github.com/users/${name}`)).json()
}

const input = select('input')

const inputStream = fromEvent(input, 'input')
inputStream.subscribe(e => {
    fromPromise(getUser(e.target.value))
        .subscribe(user => {
            console.log(user)
        })
})

