# Next.js 13 Server and Client Components

* <https://www.youtube.com/watch?v=lJxU3-61F2I>
* Where do we see server or client components in next.js 13 apps?
* Server component
    * A component that is fetched and rendered on the server.
* Client component
    * A component that is fetched and rendered on the client.
* User experience with server components
    * I want to view website
    * The user then only needs to download the JS for client components.
    * They download the HTML built by server for server components.
* When to use server vs client components
    * Need to fetch data/reduce client side JS? server component
    * Need to access browser related stuff (onClick events, window, browser APIs)? client component
* Server and client components can be interweaved.
* Client components should be leaves in your tree.