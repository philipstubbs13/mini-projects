# Node.js Tutorial for Absolute Beginners

* <https://www.youtube.com/watch?v=U8XF6AFGqlc&t=29s>

## What is Node.js

* JavaScript runtime built on Chrome's V8 JavaScript engine
* JavaScript running on the server.
* Used to build powerful, fast & scalable web applications.
* Uses an event-driven, non-blocking I/O model

## Non-blocking I/O

* Works on a single thread using non-blocking I/O calls.
* Supports tens of thousands concurrent connections.
* Optimizes throughput and scalability in web applications with many I/O operations.
* This makes Node.js apps extremely fast and efficient.

## Event Loop

* Single-threaded
* Supports concurrency via events and callbacks.
* EventEmitter class is used to bind events and event listeners.

## What Can We Build With Node.js

* REST APIs & Backend Applications
* Real-Time Services (Chat, Games, etc)
* Blogs, CMS, Social Applications
* Utilities & Tools
* Anything that is not CPU-intensive

## NPM

* Node.js Package Manager
* Used to install node programs/modules
* Easy to specify and link dependencies
* Modules get installed into the node_modules folder.

```bash
npm install express
```

```bash
npm install -g express
```

## package.json File

* Goes in the root of yoru package/application
* Tells npm how your package is structured and what to do to install it.

```bash
npm init
```