import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "./tailwind.css";
import { Img1 } from "public/assets/img";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white ">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function CatchBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <html>
          <head>
            <title>
              {error.status} | {error.statusText}
            </title>
            <Meta />
            <Links />
          </head>
          <body className="h-screen flex items-center justify-center bg-gray-50">
            <main className="text-center">
              <Img1 />
              <h1 className="text-5xl font-bold mb-4 text-[#C1440E]">
                {error.status}
              </h1>
              <p className="text-xl">{error.statusText}</p>
              <a href="/" className="mt-4 inline-block text-blue-600 underline">
                Go Home
              </a>
            </main>
            <ScrollRestoration />
            <Scripts />
          </body>
        </html>
      );
    }
  }

  return <ErrorBoundary />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <html>
      <head>
        <title>Error</title>
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "sludw0nwj4");`,
          }}
        />
      </head>
      <body className="h-screen flex items-center justify-center bg-red-50">
        <main className="text-center flex flex-col justify-center items-center gap-6">
          <div className="text-center flex flex-col justify-center items-center gap-4">
            <Img1 />
            <h1 className="text-4xl font-bold text-red-600">
              Uh oh! Something broke.
            </h1>
            <p className=" text-blackDark text-lg ">
              Our engineers have been notified (just kidding — but we’re on it).
            </p>
            <p className=" text-gray-700">
              {(error as Error).message ||
                "No idea what happened, but we’re looking into it."}
            </p>
          </div>
          <div>
            <Link to="/" className="bg-cta text-white px-6 py-3 rounded ">
              Try going back to the homepage
            </Link>
          </div>
        </main>
        <ScrollRestoration />

        <Scripts />
      </body>
    </html>
  );
}
