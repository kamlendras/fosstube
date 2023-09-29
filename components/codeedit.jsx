import React, { useState, useEffect } from 'react';
import Editor from './editor'
import useLocalStorage from '../hooks/useLocalStorage'
import SplitPane, { Pane } from 'react-split-pane';
function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <SplitPane split="vertical">

        <div className="pane top-pane">
          

            <Editor
              language="xml"
              displayName="HTML"
            
              value={html}
              onChange={setHtml}
            />

            <Editor
              language="css"
              displayName="CSS"
              value={css}
              onChange={setCss}
            />

            <Editor
              language="javascript"
              displayName="JS / JSX"
              value={js}
              onChange={setJs}
            />

       
        </div>



        <div className="pane">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>

      </SplitPane>
    </>
  )
}

export default App;