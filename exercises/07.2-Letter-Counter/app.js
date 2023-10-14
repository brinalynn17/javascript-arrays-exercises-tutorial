let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";
let counts = {};


par = par.toLowerCase();

for (let i = 0; i < par.length; i++) {
  const char = par.charAt(i);

   if (char !== ' ') {
    if (counts[char] === undefined) {
      counts[char] = 1; 
    } else {
      counts[char]++; 
    }
  }
}

console.log(counts);
