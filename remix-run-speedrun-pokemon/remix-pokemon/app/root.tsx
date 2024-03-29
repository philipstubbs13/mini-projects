import * as React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LinksFunction,
  Link,
  useMatches,
  useLocation,
} from "remix";
import type { MetaFunction } from "remix";
import tailwindUrl from "~/styles/tailwind.css";
import { ChevronLeftIcon } from "@heroicons/react/solid";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindUrl }];
};

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <RouteChangeAnnouncement />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  const matches = useMatches();
  const lastMatch = matches.slice(-1)[0];

  return (
    <div className="mx-auto max-w-7xl">
      <div>
        <div>
          <nav className="sm:hidden" aria-label="Back">
            <Link
              to="/"
              className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-200"
            >
              <ChevronLeftIcon
                className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              Back
            </Link>
          </nav>
          <nav className="hidden sm:flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div className="flex">
                  <Link
                    to="/"
                    className="text-sm font-medium text-gray-400 hover:text-gray-200"
                  >
                    Home
                  </Link>
                </div>
              </li>
              {matches
                .filter((match) => match.handle && match.handle.breadcrumb)
                .map((match, index) => (
                  <li key={index}>
                    <div className="flex">
                      {match.handle.breadcrumb(match.params)}
                    </div>
                  </li>
                ))}
            </ol>
          </nav>
        </div>
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-black sm:text-3xl sm:truncate">
              {lastMatch?.handle?.title?.(lastMatch.params) ?? "Pokemon"}
            </h2>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div>{children}</div>
      </div>
    </div>
  );
}

/**
 * Provides an alert for screen reader users when the route changes.
 */
const RouteChangeAnnouncement = React.memo(() => {
  let [hydrated, setHydrated] = React.useState(false);
  let [innerHtml, setInnerHtml] = React.useState("");
  let location = useLocation();

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  let firstRenderRef = React.useRef(true);
  React.useEffect(() => {
    // Skip the first render because we don't want an announcement on the
    // initial page load.
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);

  // Render nothing on the server. The live region provides no value unless
  // scripts are loaded and the browser takes over normal routing.
  if (!hydrated) {
    return null;
  }

  return (
    <div
      aria-live="assertive"
      aria-atomic
      id="route-change-region"
      style={{
        border: "0",
        clipPath: "inset(100%)",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap",
        wordWrap: "normal",
      }}
    >
      {innerHtml}
    </div>
  );
});

