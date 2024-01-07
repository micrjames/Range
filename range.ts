export class Range implements Iterable<number> {
   private startPoint: number;
   private endPoint: number;
   private step: number;

   constructor(end: number, start=0, step=1) {
	  this.startPoint = start - step;
	  this.endPoint = end;
	  this.step = step;
   }

   // Symbol.iterator makes an iterator
   // * makes it a generator
   *[Symbol.iterator](): IterableIterator<number> {
	  while(this.startPoint < this.endPoint - this.step)
		 // yield a value
		 yield this.startPoint += this.step; 
   }
};

// .next()
// .value
