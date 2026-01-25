// Nullish Coalescing Operator (??) : null, undefined

let val1;
//val1 = 5 ?? 10 // 5
//val1 = null ?? 10 // 10
//val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 15
console.log(val1);
