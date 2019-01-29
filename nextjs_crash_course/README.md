# Next.js Crash Course - Server Side React

* <https://www.youtube.com/watch?v=IkOVe40Sy0U>
* <https://github.com/bradtraversy/bitzprice>

## What is Next.js

Minimalistic framework for rendering React applications on the server.

## Core Features of Next

* Server-rendered React apps
* Automatic code splitting
* Simple page based routing
* Built in CSS support
* Hot reloading
* Deployment

## Installation and setup

```bash
npm init
npm install next react react-dom
```

```bash
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
  }
}

pages/index.js
export default () => <div>Hello World</div>
```

## Link Module

```bash
import Link from 'next/link'

<Link href="/"><a>Home</a></Link>

<Link href="/about"><button>About</button></Link>
```