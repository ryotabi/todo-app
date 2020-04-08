import React, { useState } from 'react'
import Login from './pages/Login'
import Form from './pages/Form'
import List from './pages/List'

const App = () => {
  const [texts, setTexts] = useState([
    {
      content: 'ご飯を食べる'
    },
    {
      content: '歯を磨く'
    }
  ])
  return (
    <>
      <h1>Todo App</h1>
      <Login />
      <Form />
      <List texts={texts} />
    </>
  )
}

export default App