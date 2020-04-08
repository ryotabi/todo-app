import React from 'react'

const Login = () => {
  return (
    <>
      <h1>ログイン</h1>
      <form>
        <div>
          <label htmlFor='name'>名前</label>
          <input type='text' id='name' placeholder='名前'></input>
        </div>
        <div>
          <label htmlFor='password'>パスワード</label>
          <input type='text' id='password' placeholder='パスワード'></input>
        </div>
        <button type='submit'>登録</button>


      </form>
    </>
  )
}

export default Login