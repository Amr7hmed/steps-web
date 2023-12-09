const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === "/a") {
        await app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        await app.render(req, res, "/b", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});

/*
const express = require("express");
const next = require("next");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { ServerStyleSheet } = require("styled-components"); // If you're using styled-components

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("*", async (req, res) => {
    const { default: Page } = require(`./pages${req.path}`);
    const sheet = new ServerStyleSheet(); // If you're using styled-components
    const html = ReactDOMServer.renderToString(sheet.collectStyles(<Page />));
    const styles = sheet.getStyleTags(); // If you're using styled-components

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Your Page Title</title>
          ${styles} <!-- If you're using styled-components -->
        </head>
        <body>
          <div id="root">${html}</div>
        </body>
      </html>
    `);
  });

  server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
});


*/
