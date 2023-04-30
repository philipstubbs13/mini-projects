# Vite Crash Course

- <https://www.youtube.com/watch?v=89NJdbYTgJ8>

* blog post: <https://www.traversymedia.com/blog/vite-crash-course>

* Traditional Module Bundlers
  - Bundles all your JS modules, CSS, and other assets.
  - Does this every time you make a change, which can get really slow as your app grows.
* Vite
  - Takes advantage of native ES modules. Serves directly to the browser.
  - Uses Rollup to bundle files for production (npm run build);
* Replacement for create react app?
  - CRA is great for beginners. It's easy to use and has some great features.
  - It can get quite laggy as your application grows as it uses Webpack under the hood.
  - Vite has a React plugin, which makes it a great replacement for a faster experience.
