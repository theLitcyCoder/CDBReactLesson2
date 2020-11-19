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
