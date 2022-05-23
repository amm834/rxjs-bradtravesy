import {from, interval, map, merge, mergeAll, pluck, take} from "rxjs";


let ob1 = interval(500).pipe(map(x => "Merge 1 " + x))
let ob2 = interval(2000)
    .pipe(map(x => "Merge 1 " + x), mergeAll())
ob2.subscribe(x => {
    console.log(x)
})