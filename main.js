import {fromEvent} from "rxjs";

const select = selector => document.querySelector(selector);

const btn = select('#btn')
const btnStream = fromEvent(btn, 'click')
btnStream.subscribe(
    (e) => console.log(e.target.innerHTML),
    (error) => console.log(error),
    () => console.log("Complete")
)


const input = select('#input')
const inputStream = fromEvent(input, 'keyup')
inputStream.subscribe(
    (e) => {
        const text = e.target.value
        select('#text').innerText = text
    },
    (error) => console.log(error),
    () => console.log("Complete")
)

const moveStream = fromEvent(document, 'mousemove')
moveStream.subscribe({
    next(e) {
        select('#text').innerText = `x: ${e.clientX}, y: ${e.clientY}`
    }
})