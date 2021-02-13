import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={()=> dispatch(Increment())}>+</button>
      <button onClick={()=> dispatch(Decrement())}>-</button>
      {isLogged ? <h1>Não deveria ver isto</h1> : ''}
    </>
  );
}

export default App;
