# Deno Crash Course

* <https://www.youtube.com/watch?v=NHHhiqwcfRM>
* <https://www.youtube.com/watch?v=KuaI6mphFNc&t=2s>
* A JavaScript/TypeScript runtime based on the V8 JavaScript engined and the Rust programming language.
* Created by Ryan Dahl, who is also the creator of Node.js
* De-Centralized Packages
  * no more npm packages/package.json
  * packages are imported from a URL - <https://deno.land/x/>
  * Cached to hard drive on load.
* Standard Library
  * Extensive standard library for things like fs, datetime, http, etc.
* Use TypeScript or JavaScript.
* Secure by Default.
* Modern JS
* ES Modules
* Top Level / First Class Await
* Built in Testing
* Browser Compatible API
* Execute Wasm Binaries

* Installation

Using Scoop (Windows):

```bash
scoop install deno
```

Using Chocolatey (Windows):

```bash
choco install deno
```

Using Cargo (Windows, macOS, Linux):

```bash
cargo install deno
```

* The install of deno was successful.
* Software installed to 'C:\ProgramData\chocolatey\lib\deno'

Start REPL:

```bash
deno
```

Help command

```bash
deno --help
```

```bash
deno run https://deno.land/std/examples/welcome.ts
```

```bash
curl https://deno.land/std/examples/welcome.ts
```

```bash
deno run --allow-read --allow-net https://deno.land/std/http/file_ser ver.ts
```

```bash
deno install --allow-read --allow-net https://deno.land/std/http/file
_server.ts
```

```bash
Add C:\Users\phili\.deno\bin to PATH
set PATH=%PATH%;C:\Users\phili\.deno\bin
```

```bash
deno run --allow-net server.ts
```
