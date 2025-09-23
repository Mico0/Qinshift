// 'use server'
// Optional directive, If included, it explicitly marks the file as a Server Component.

//TL;DR
// Server Components = "Render on the server, ship only HTML to the browser".
// Great for performance, security and SEO.
// But not good for interactivity - that's where Client Components come in.

export default function ExampleServer() {
  // This log runs on the server, not in the browser.
  console.log("Hello from the server component!");

  return <h1>This is a server component!</h1>;
}
