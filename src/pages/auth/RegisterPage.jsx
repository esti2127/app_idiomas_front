import React from 'react'

export const RegisterPage = () => {

  const handleSubmit=()=>{}
  return (
    <div>
      <h1>RegisterPage</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Write your name here" required/>
          <input type="text" placeholder="Write your email here" required/>
          <input type="password" placeholder="Enter your password here" minLength="6" required/>
          <button type="submit">Log in</button>
        </form>
    </div>
  )
}
