import { Application, Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";

const app = new Application();

// static files
app.static('/', './public');

// routes
app.get('/', async (ctx: Context) => {
  await ctx.file('./public/index.html');
})

// listen to port
app.start({ port: 3000 });