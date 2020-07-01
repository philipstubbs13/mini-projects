// reading files

// const decoder = new TextDecoder('utf-8');

// const data = await Deno.readFile('readme.txt');
// console.log(decoder.decode(data));

// const data = await Deno.readTextFile('readme.txt');
// console.log(data);



// writing files

// const encoder = new TextEncoder();
// const text = encoder.encode('hello again, ninjas')

// await Deno.writeFile('readme.txt', text)

// renaming and removing files

// await Deno.rename('readme.txt', 'deleteme.txt');
// await Deno.remove('deleteme.txt');



// fetch api

// const res = await fetch('https://swapi.dev/api/films/');
// const data = await res.json();

// console.log(data);


// uuid module
// import { v4 } from "https://deno.land/std/uuid/mod.ts";

// const uid = v4.generate();
// console.log(uid);


// fs module
// import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

// const jsonObj = await readJson('ninjas.json');
// console.log(jsonObj);

// const books =   
// [
//   {
//     "title": "the way of kings",
//     "author": "brandon sanderson"
//   },
//   {
//     "title": "name of the wind",
//     "author": "patrick rothfuss",
//   }
// ];

// await writeJson('books.json', books, { spaces: 2 });
// console.log('created books.json');


// http module
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 3000 });
console.log('listening for requests on port 3000');

for await (const req of server) {
  console.log('request made');
  const url = req.url;
  req.respond({ body: `Hello again, ninjas, you visited ${url}` })
}

// case third party module
import { camelCase, paramCase, pascalCase, snakeCase } from "https://deno.land/x/case/mod.ts";

const text = 'hello again ninjas';

const camel = camelCase(text);
const param = paramCase(text);
const pascal = pascalCase(text);
const snake = snakeCase(text);

console.log(camel, param, pascal, snake);