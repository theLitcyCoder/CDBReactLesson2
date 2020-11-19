### Creating, and cleaning the project

Create the example project

```
npx create-react-app simples-example
```

Replace the content of index.js with:

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```

Replace the content of App.js with:

```
const App = () => {
  return (
    <div>
      Hello world
    </div>
  )
}

export default App
```

Remove the files:
- App.css
- App.test.js
- index.css
- logo.svg
- reportWebVitals.js
- setupTests.js

```
 rm src/App.css src/App.test.js src/index.css src/logo.svg src/reportWebVitals.js src/setupTests.js
```

Execute npm start

### Calling the API, and rendering the content on the screen

Install the HTTP client dependency

```
npm install axios
```

Replace the content of App.js with:

```
import { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/v1/users').then((response) => {
      setUsers(response.data)  
    })
  }, [])

  return (
    <div>
      {users.map(user => {
        return <div key={user.name}> {user.name} </div>
      })}
    </div>
  )
}

export default App

```

### Adding client actions

Replace the content of App.js with:

```
import { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([])

  /**
   * Define the placeholder for the desired state
   */
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:4000/v1/users').then((response) => {
      setUsers(response.data)  
    })
  }, [])

  /**
   * Define the function to change the state
   */
  const incCounter = () => {
    setCounter(pre => { return pre + 1 })
  }

  return (
    <div>
      <div>
  <span onClick={() => { incCounter() }}>Inc Counter: {counter} { /** Use the state */ }</span> 
      </div>
      <hr></hr>
      {users.map(user => {
        return <div key={user.name}> {user.name} </div>
      })}
    </div>
  )
}

export default App

```

### Two way data bind

```
import { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([])

  /**
   * Define the placeholder for the desired state
   */
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:4000/v1/users').then((response) => {
      setUsers(response.data)  
    })
  }, [])

  /**
   * Define the function to change the state
   */
  const incCounter = () => {
    setCounter(pre => { return pre + 1 })
  }

  const changeCounter = (value) => {
    setCounter(value)
  }

  return (
    <div>
      <div>
        <span onClick={() => { incCounter() }}>Inc Counter: {counter} { /** Use the state */ }</span> 
      </div>
      
      <hr></hr>
      <div>
        <input 
        type="text" 
        onChange={(e) => { changeCounter(parseInt(e.target.value)) }} 
        value={counter} /> { /** Two way data bind */ }
        <span> Set Counter: {counter} { /** Use the state */ }</span>
      </div>

      <hr></hr>
      {users.map(user => {
        return <div key={user.name}> {user.name} </div>
      })}
    </div>
  )
}

export default App

```
