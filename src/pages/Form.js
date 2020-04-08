import React, { useState } from 'react'

const Form = () => {
  const [value, setValue] = useState('')
  const handleSummit = (e) => {
    e.preventDefault()

    // addText()
  }
  return (
    <>
      <form
        onSubmit={handleSummit}
      >
        <input
          placeholder='ここにtodoを入力'
          onChange={e => {
            setValue(e.target.value)
          }}
        ></input>
      </form>

    </>
  )
}

export default Form