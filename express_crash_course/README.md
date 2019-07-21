# Express Crash Course

* <https://www.youtube.com/watch?v=L72fhGm1tfE>
* Express is a fast, unopinionated and minimalist web framework for Node.js.
* Express is a server-side or back-end framework. It is not comparable to client-side frameworks like React, Angular, and Vue. It can be used in combination with those frameworks to build full stack apps.
* Why use express?
  * Makes building web apps with Node.js MUCH easier.
  * Used for both server rendered apps as well as API/Microservices.
  * Extremely light, fast, and free.
  * Full control of request and response.
  * Most popular Node framework.
  * It's all JavaScript.
* Basic server syntax

```bash
const express = require('express');

// Init express
const app = express();

// Create your endpoints/route handlers
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Listen on a port.
app.listen(5000);
```

* Basic route handling
  * Handling requests/routes is simple.
  * app.get(), app.post(), app.put(), app.delete(), etc.
  * Access to params, query strings, url parts, etc.
  * Express has a router so we can store routes in separate files and export.
  * We can parse incoming data with the Body Parser.

* Express middleware
  * Middleware functions are functions that have access to the request and response objects. Express has built in middleware but middleware also comes from 3rd party packages as well as custom middleware.
  * Execute any code.
  * End response cycle.
  * Call next middleware in the stack.
  * Make changes to the request/response objects.
