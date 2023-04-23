import React from 'react';
import './app.css';
import AppRouter from '../../components/routes/AppRouter';

function App() {
  return (
    <html lang="en">
      <head>
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `import RefreshRuntime from "http://localhost:5173/@react-refresh";
            RefreshRuntime.injectIntoGlobalHook(window);
            window.$RefreshReg$ = () => {};
            window.$RefreshSig$ = () => (type) => type;
            window.__vite_plugin_react_preamble_installed__ = true;`,
          }}
        ></script>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>RSSchool React 2023 Q1</title>
      </head>
      <body>
        <AppRouter />
      </body>
    </html>
  );
}

export default App;
