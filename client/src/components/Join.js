import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  //   const [password, setPassword] = useState('')

  return (
    <div className="main-container">
      <div className="join-content">
        <h1 className="title">Join</h1>
        <div>
          <input
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
            className="joinInput"
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="Room"
            onChange={(event) => setRoom(event.target.value)}
            className="joinInput mt-20"
            type="text"
          />
        </div>
        <Link to={'/chat?name=${name}&room=${room}'}>
          <button
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            className="btn mt-20"
            type="submit"
          >
            Sign in
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Join
