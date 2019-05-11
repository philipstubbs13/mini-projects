const slug = require('slug');

function slugify(words) {
  return slug(words, {
    lower: true,
    replacement: ''
  });
}

console.log(slugify('Blog Post One'));