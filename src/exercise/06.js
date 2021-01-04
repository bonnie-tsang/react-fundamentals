// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('');
  const userNameInputRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // const value = event.target.elements.userNameInput.value;
    onSubmitUsername(username);
  }

  const handleChange = (event) => {
    const {value} = event.target;
    setUsername(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">User name:</label>
        <input ref={userNameInputRef} type="text" id="userNameInput" onChange={handleChange} value={username} />
        {/* <input type="text" id="userNameInput" /> */}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
