import React, { useEffect, useState } from "react";
import UserList from "./components/UserList";

function App() {
  const [data, setData] = useState(null)
  const [input, setInput] = useState('')
  const [toggle, setToggle] = useState(false)

  const onClick = () => setToggle(prev => !prev)
  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 1000)
  }, [])
  return (
    <>
    <UserList />
    {/* <h1 data-testid="input-value">{input}</h1>
    {toggle === true && <h1 data-testid="toggle-elem">toggle</h1> }
    {data && <div style={{color: 'red'}}>data</div> }
    <h1>hello world</h1>
    <input onChange={e=> setInput(e.target.value)} type="text" placeholder="input value..." />
    <button data-testid="toggle-btn" onClick={onClick}>dont click me</button> */}
    </>
  );
}

export default App;
