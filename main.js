import {catchError, Observable, of} from "rxjs";

const observable = new Observable(subscriber => {
    subscriber.next("Hello World")
    subscriber.error(new Error("Hey I am error"))
    subscriber.complete()
})

observable
    .subscribe(
        {
            next(value) {
                console.log(value)
            },
            error(err) {
                console.log(err)
            },
            complete() {
                console.log('Completed')
            },
        })