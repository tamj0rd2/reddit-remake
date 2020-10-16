import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

console.log('Hello from tsx!')

const App = () => {
  const [response, setResponse] = useState<string>()

  useEffect(() => {
    fetch('/api/healthcheck')
      .then((res) => {
        if (!res.ok) throw new Error(`Received bad status ${res.status}`)
        return res.text()
      })
      .then((text) => setResponse(text))
      .catch(() => setResponse('Something went wrong :('))
  }, [])

  return (
    <main>
      <a href="/logout">Log out</a>
      <h1>Hello :)</h1>
      <h2>{response}</h2>
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
