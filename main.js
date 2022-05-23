import {from, fromEvent} from "rxjs";
import {select} from "./util";

const numbers = [1, 2, 3, 4, 5]
const numberStream = from(numbers)
numberStream.subscribe({
    next(value) {
        console.log(value)
    },
    error(error) {
        console.log(error)
    },
    complete() {
        console.log('Complete')
    }
})

const posts = [
    {title: "Title 1", body: "Post content 1"},
    {title: "Title 2", body: "Post content 2"},
    {title: "Title 3", body: "Post content 3"},
]

const showPosts = select('#list')
const postStream = from(posts)

postStream.subscribe({
    next(post) {
        showPosts.append(`
        <li>
           <h1>${post.title}</h1>
            <p>${post.body}</p>
</li>
        `)
    }
})


const sets = new Set(['body', ['hey'], {title: 'hello'}])
const setsStream = from(sets)
setsStream.subscribe({
    next(value) {
        console.log(value)
    },
    error(error) {
        console.log(error)
    },
    complete() {
        console.log('Complete')
    }
})


const maps = new Map([[1, 2,], [3, 4], [5, 6]])
const mapsStream = from(maps)
mapsStream.subscribe({
    next(value) {
        console.log(value)
    },
    error(error) {
        console.log(error)
    },
    complete() {
        console.log('Complete')
    }
})