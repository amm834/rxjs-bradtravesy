import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {select} from "./util";
import {fromEvent, interval, range, take, timer} from "rxjs";

interval(100)
    .pipe(take(5))
    .subscribe({
        next(value) {
            console.log(value)
        },
        complete() {
            console.log('Complete')
        }
    })

range(100, 200)
    .subscribe({
        next(value) {
            console.log(value)
        },
        complete() {
            console.log('Complete')
        }
    })

timer(5000, 1000)
    .pipe(take(5))
    .subscribe({
        next(value) {
            console.log(value)
        },
        complete() {
            console.log('Complete')
        }
    })