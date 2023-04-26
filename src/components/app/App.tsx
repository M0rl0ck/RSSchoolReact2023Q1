function App() {
  return {
    header: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <script type="module">
            import RefreshRuntime from "http://localhost:5173/@react-refresh";
            RefreshRuntime.injectIntoGlobalHook(window);
            window.$RefreshReg$ = () => {};
            window.$RefreshSig$ = () => (type) => type;
            window.__vite_plugin_react_preamble_installed__ = true;
        </script>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>RSSchool React 2023 Q1</title>
      </head>
      <body>
        <div id="root">`,

    footer: `</div>
      </body>
    </html>
    </html>`,
  };
}

export default App;
