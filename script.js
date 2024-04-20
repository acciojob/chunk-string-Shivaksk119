function stringChop(str, size) {
	// your code here
	  let chunk = [];
	  let start = 0;
	  while((start+size) <= str.length) {
		console.log(start);
		  chunk.push(str.slice(start, (start+size)));
		  start+=size;
	  }
	  chunk.push(str.slice(start, str.length));
	  return chunk;
	  
}

// // Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
