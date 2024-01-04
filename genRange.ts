function *generateRange(end, start=0, step=1) {
   let x = start - step;
   while(x < end - step) yield x += step;
}

const gen = generateRange(5);
let x = gen.next();
while(!x.done) {
   console.log(x.value);
   x = gen.next();
}
